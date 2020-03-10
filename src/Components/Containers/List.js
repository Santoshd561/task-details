import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Popconfirm, Icon, List, Avatar, message, Button } from "antd";
import "./main.css";
import Detailscomponent from "./Details";
const { Header } = Layout;

export default class DataList extends Component {
  state = {
    collapsed: false,
    data: [
      {
        id: 1,
        full_name: "Boote McTrusty",
        email: "bmctrusty0@163.com",
        mobile: "+91-755-5511-923",
        adhar_number: "7040 4460 7334",
        pan_number: "ASCNL0147A"
      },
      {
        id: 2,
        full_name: "Dugald Soal",
        email: "dsoal1@odnoklassniki.ru",
        mobile: "+91-755-5511-912",
        adhar_number: "1761 2820 5684",
        pan_number: "ASCNL0147B"
      },
      {
        id: 3,
        full_name: "Benedicto Northbridge",
        email: "bnorthbridge2@ehow.com",
        mobile: "+91-755-5511-924",
        adhar_number: "7162 0379 7700",
        pan_number: "ASCNL0147C"
      },
      {
        id: 4,
        full_name: "Julissa O'Dare",
        email: "jodare3@google.cn",
        mobile: "+91-755-5511-978",
        adhar_number: "3283 0171 7577",
        pan_number: "ASCNL0147D"
      },
      {
        id: 5,
        full_name: "Wally Hunnaball",
        email: "whunnaball4@nytimes.com",
        mobile: "+91-755-5511-925",
        adhar_number: "4444 6760 0200",
        pan_number: "EASCNL0147E"
      },
      {
        id: 6,
        full_name: "Jenica Swanton",
        email: "jswanton5@freewebs.com",
        mobile: "+91-755-5511-926",
        adhar_number: "9795 9710 4418",
        pan_number: "ASCNL0147F"
      },
      {
        id: 7,
        full_name: "Smith Mellor",
        email: "smellor6@springer.com",
        mobile: "+91-755-5511-928",
        adhar_number: "8986 6260 9216",
        pan_number: "ASCNL0147G"
      },
      {
        id: 8,
        full_name: "Montgomery Chatfield",
        email: "mchatfield7@weebly.com",
        mobile: "+91-755-5511-927",
        adhar_number: "8287 5930 5830",
        pan_number: "ASCNL0147H"
      },
      {
        id: 9,
        full_name: "Chaddie Reynard",
        email: "creynard8@house.gov",
        mobile: "+91-755-5541-923",
        adhar_number: "5588 1230 7202",
        pan_number: "ASCNL0147I"
      },
      {
        id: 10,
        full_name: "Mirella Mityushkin",
        email: "mmityushkin9@bigcartel.com",
        mobile: "+91-755-5511-789",
        adhar_number: "2629 6570 5505",
        pan_number: "ASCNL0147J"
      },
      {
        id: 11,
        full_name: "Jobyna Dickens",
        email: "jdickensa@businesswire.com",
        mobile: "+91-755-5511-784",
        adhar_number: "6570 2310 3613",
        pan_number: "ASCNL0147K"
      },
      {
        id: 12,
        full_name: "La verne Lorincz",
        email: "lverneb@state.gov",
        mobile: "+91-755-5511-159",
        adhar_number: "7441 5140 9621",
        pan_number: "ASCNL0147KL"
      },
      {
        id: 13,
        full_name: "Baxy Clipsham",
        email: "bclipshamc@ifeng.com",
        mobile: "+91-755-5511-222",
        adhar_number: "7732 5120 7064",
        pan_number: "ASCNL0147M"
      },
      {
        id: 14,
        full_name: "Alexandro Drillingcourt",
        email: "adrillingcourtd@surveymonkey.com",
        mobile: "+91-755-5511-265",
        adhar_number: "6283 4500 5053",
        pan_number: "ASCNL0147N"
      },
      {
        id: 15,
        full_name: "Homer Onn",
        email: "honne@oracle.com",
        mobile: "+91-755-5511-695",
        adhar_number: "1860 1820 2809",
        pan_number: "ASCNL0147O"
      },
      {
        id: 16,
        full_name: "Sheffie Gerrelts",
        email: "sgerreltsf@yellowpages.com",
        mobile: "+91-755-5511-879",
        adhar_number: "2580 1970 4577",
        pan_number: "ASCNL0147P"
      },
      {
        id: 17,
        full_name: "Micaela Poulter",
        email: "mpoulterg@wordpress.com",
        mobile: "+91-755-5511-444",
        adhar_number: "6570 8130 8639",
        pan_number: "ASCNL0147Q"
      },
      {
        id: 18,
        full_name: "Massimiliano Hearsey",
        email: "mhearseyh@uol.com.br",
        mobile: "+91-755-5511-485",
        adhar_number: "5920 6810 3891",
        pan_number: "ASCNL0147R"
      },
      {
        id: 19,
        full_name: "Marcia Nelsey",
        email: "mnelseyi@wp.com",
        mobile: "+91-755-5511-248",
        adhar_number: "3820 1470 7807",
        pan_number: "ASCNL0147T"
      },
      {
        id: 20,
        full_name: "Felipe Dorken",
        email: "fdorkenj@123-reg.co.uk",
        mobile: "+91-755-5511-654",
        adhar_number: "6900 4850 2842",
        pan_number: "ASCNL0147L"
      }
    ],

    currentContent: null,
    tempCurrentContent: null
  };
  handleUpdate = (id, data) => {
    console.log(data, id);
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id ? { ...item, ...data } : item;
      }),
      currentContent: { id, ...data }
    });
    message.success("Record updated successfully !");
  };
  handleDetails = record => {
    this.setState({
      currentContent: record,
      tempCurrentContent: record
    });
  };
  handleUndo = id => {
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id ? this.state.tempCurrentContent : item;
      }),
      currentContent: this.state.tempCurrentContent
    });
  };
  handleDelete = item => {
    this.setState(
      {
        data: this.state.data.filter(d => d.id != item.id),
        tempCurrentContent: item
      },
      () => {
        message.success(
          <div>
            Record deleted successfully !
            <Button
              type="link"
              onClick={() => {
                this.setState({
                  data: [
                    ...this.state.data,
                    this.state.tempCurrentContent
                  ].sort((a, b) => a.id - b.id)
                });
                message.destroy();
              }}
            >
              Undo
            </Button>
          </div>
        );
      }
    );
  };
  render() {
    return (
      <Layout>
        <Header>
          <h1 style={{ lineHeight: "64px", paddingLeft: "30px" }}>
            Data Modification
          </h1>
        </Header>
        <div
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div className="list">
            <h1>List</h1>
            <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item
                  actions={[
                    <div onClick={e => e.stopPropagation()}>
                      <Popconfirm
                        title="Do you want to delete?"
                        onConfirm={() => this.handleDelete(item)}
                      >
                        <Icon
                          type="delete"
                          style={{ cursor: "pointer", marginLeft: "-30px" }}
                        />
                      </Popconfirm>
                    </div>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar>{item.id}</Avatar>}
                    onClick={() => this.handleDetails(item)}
                    title={item.full_name}
                    description={
                      <>
                        <div>Email Id: {item.email}</div>
                        <div>Mobile: {item.mobile}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </div>

          <Detailscomponent
            editContent={this.state.currentContent}
            handleUpdate={this.handleUpdate}
            handleUndo={this.handleUndo}
          />
        </div>
      </Layout>
    );
  }
}
