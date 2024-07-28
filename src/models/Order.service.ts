import { Order, OrderItemInput } from "../libs/types/order";
import { Member } from "../libs/types/member";
import OrderModel from "../schema/Order.model";
import OrderItemModel from "../schema/OrderItem.model";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { Message } from "../libs/Errors";
import { HttpCode } from "../libs/Errors";
import { ObjectId } from "mongoose";

class OrderService {
    private readonly orderModel;
    private readonly orderItemModel;

    constructor() {
        this.orderModel = OrderModel;
        this.orderItemModel = OrderItemModel;
    }

    public async createOrder(
        member: Member, 
        input: OrderItemInput[]
    ): Promise<Order> {
        const memberId = shapeIntoMongooseObjectId(member._id);
        const amount = input.reduce((accumlator: number, item: OrderItemInput) => {
            return accumlator + item.itemPrice * item.itemQuantity;
        }, 0);
        const delivery = amount < 100 ? 5 : 0;

        try{
            const newOrder: Order = await this.orderModel.create({
                orderTotal: amount + delivery,
                orderDelivery: delivery,
                memberId: memberId,
            });
            const orderId = member._id;
            console.log("orderId:", member._id);
            await this.recordOrderItem(orderId, input);

            return newOrder;            
        } catch (err) {
            console.log("Error, model: createOrder");
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    private async recordOrderItem(orderId: ObjectId, input: OrderItemInput[]): Promise<void> {
        const promisedlist =  input.map( async (item: OrderItemInput) => {
            item.orderId = orderId;
            item.productId = shapeIntoMongooseObjectId(item.productId);
            await this.orderItemModel.create(item);
            return "INSERTED";
        });

        const orderItemState = await Promise.all(promisedlist);
        console.log("orderItemState:", orderItemState);
        
        
    }
}

export default OrderService;