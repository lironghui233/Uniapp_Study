import type { OrderCreateParams, OrderCreateResult, OrderListParams, OrderListResult, OrderLogisticResult, OrderPreResult, OrderResult } from "@/types/order"
import { http } from "@/utils/http"

/**
 * 填写订单-获取预付订单
 * @param
 * @returns
 */
export const getMemberOrderPreAPI = () => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre',
    })
}

/**
 * 填写订单-获取立即购买订单
 * @param skuId skuId
 * @param count count
 * @returns
 */
export const getMemberOrderPreNowAPI = (data: {
    skuId: string,
    count: string,
    addressId?: string
}) => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre/now',
        data,
    })
}

/**
 * 提交订单
 * @param data 请求参数
 * @returns
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
    return http<OrderCreateResult>({
        method: 'POST',
        url: '/member/order',
        data,
    })
}

/**
 * 获取订单详情
 * @param
 * @returns
 */
export const getMemberOrderByIdAPI = (id: string) => {
    return http<OrderResult>({
        method: 'GET',
        url: `/member/order/${id}`,
    })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
    return http({
        method: 'GET',
        url: `/member/order/consignment/${id}`,
    })
}


/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
    return http<OrderResult>({
        method: 'PUT',
        url: `/member/order/${id}/receipt`,
    })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
    return http<OrderLogisticResult>({
        method: 'GET',
        url: `/member/order/${id}/logistics`,
    })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
    return http({
        method: 'DELETE',
        url: `/member/order`,
        data,
    })
}


/**
 * 获取订单列表
 * @param data orderState 订单状态
 * @returns
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
    return http<OrderListResult>({
      method: 'GET',
      url: `/member/order`,
      data,
    })
  }
  
  
  