/**
 * @title CardTable
 * @description 全选、分页、过滤功能、交换
 *
 */
import React, { Component } from "react";
import NcGrid from '../../src';
import { Select } from 'tinper-bee'

const EditGrid = NcGrid.EditGrid;

const column = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    width: 100,
    
  },
  {
    title: "订单编号",
    dataIndex: "orderCode",
    key: "orderCode",
    width: 150,
    type:'input',
    required:true,
    validate:true
  },
  {
    title: "金额",
    dataIndex: "money",
    key: "money",
    width: 160,
    textAlign:'right',
    type:'inputNumber',
    required:true,
    validate:true
  },
  {
    title: "类型",
    dataIndex: "type_name",
    key: "type_name",
    width: 100,
    type:'select',
    required:true,
    validate:true,
    options:[
      {
        key:'1',value:'类型1'
      },
      {
        key:'2',value:'类型2'
      },
      {
        key:'3',value:'类型3'
      },
    ]
  },
  {
    title: "采购组织",
    dataIndex: "purchasing",
    key: "purchasing",
    width: 150
  },
  {
    title: "采购组",
    dataIndex: "purchasingGroup",
    key: "purchasingGroup",
    width: 300
  },
  {
    title: "凭证日期",
    dataIndex: "voucherDate",
    key: "voucherDate",
    width: 150
  },
  {
    title: "审批状态",
    dataIndex: "approvalState_name",
    key: "approvalState_name",
    width: 150
  },
  {
    title: "确认状态",
    dataIndex: "confirmState_name",
    key: "confirmState_name",
    width: 500
  },
  {
    title: "关闭状态",
    dataIndex: "closeState_name",
    key: "closeState_name",
    width: 150
  }
];
const dataList = [
  {
    index: 1,
    orderCode: "2343",
    supplierName: "xxx",
    type_name: "1",
    purchasing: "内行",
    purchasingGroup: "323",
    voucherDate: "kkkk",
    approvalState_name: "vvvv",
    confirmState_name: "aaaa",
    closeState_name: "vnnnnn",
    money:'1232.56',
    d: "操作",
    key: "1"
  },
  {
    index: 2,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "2",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'2341232.56',
    d: "2操作",
    key: "2"
  },
  {
    index: 3,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "3",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'122368732.56',
    d: "3操作",
    key: "3"
  },
  {
    index: 4,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "3",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'18765232.56',
    d: "4操作",
    key: "4"
  }
];

class Demo1 extends Component {
  constructor(props) {
    super(props);
  }

  onChange=(data)=>{
    console.log('table的数据如下')
    console.log(data)
  }
  render() {
    let paginationObj = {
      items:10,//一页显示多少条
      total:100,//总共多少条、
      freshData:this.freshData,//点击下一页刷新的数据
      onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
      showJump:false,
      noBorder:true
    }
    return (
      <div>
          <EditGrid
          columns={column}
          data={dataList}
          paginationObj={paginationObj}
          multiSelect={true}
          onChange={this.onChange}
          showPagination={false}
        />
      </div>
      
    );
  }
}


export default Demo1;