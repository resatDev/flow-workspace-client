import React, { Component } from 'react'
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { connect } from 'react-redux';
import { backendMissions } from '../../../../api/restApi/api';

class FlowArea extends Component {
  constructor(props){
    super(props)
    this.state = {
      qid: []
    }
  }
  chartSimple = {
    offset: {
      x: 0,
      y: 0
    },
    nodes: {
      ADMIN: {
        id: "ADMIN",
        type: "ADMIN",
        position: {
          x: 300,
          y: 100
        },
        ports: {
          port1: {
            id: "port1",
            type: "output",
            properties: {
              value: "yes"
            }
          },
        }
      },
    },
    links: {
            
    },
    selected: {},
    hovered: {}
  };
  componentWillMount = async () => {
    await backendMissions('getMission', {
      flowId: localStorage.getItem('flow_id')
    })
      .then(res => {
        if(res.data.length > 0){
          res.data.map(data => {
            this.chartSimple.nodes[`${data.qid}`] = {
              id: data.qid,
              type: `${data.qid} ${data.employee}`,
              position: {
                x: 300,
                y: 100
              },
              ports: {
                port1: {
                  id: "port1",
                  type: "output",
                  properties: {
                    value: "yes"
                  }
                },
                port2: {
                  id: "port2",
                  type: "input",
                  properties: {
                    value: "yes"
                  }
                },
              }
            }
          })
          res.data.map(data => {
            this.setState({
              qid: [...this.state.qid, data.qid]
            })
          })
          this.chartSimple.links['ADMIN'] = {
            id: 'ADMIN',
            from: {
              nodeId: 'ADMIN',
              portId: "port1"
            },
            to: {
              nodeId: this.state.qid[this.state.qid.length-1],
              portId: "port2"
            },
          }
          for(let i = 1; i< this.state.qid.length; i++){
            this.chartSimple.links[this.state.qid[i]] = {
              id: this.state.qid[i],
              from: {
                nodeId: this.state.qid[i-1],
                portId: "port1"
              },
              to: {
                nodeId: this.state.qid[i],
                portId: "port2"
              },
            }
          }
        }
      })
  }
  render() {
    return (
      <div className="mainSpace">
        <FlowChartWithState initialValue={this.chartSimple} />
        {
          (this.props.loading) ? console.log(this.props.nodes): console.log('....Loading')
        }
      </div>
            
    )
  }
}

const mapStatetoProps = state => {
  return {
    nodes: state.nodeValueReducer.value,
    loading: state.loadingReducer
  }
}

export default connect(mapStatetoProps, null)(FlowArea)
