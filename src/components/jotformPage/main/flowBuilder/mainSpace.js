import React, { Component } from 'react'
import { FlowChartWithState } from "@mrblenny/react-flow-chart";

export default class MainSpace extends Component {
    chartSimple = {
        offset: {
          x: 0,
          y: 0
        },
        nodes: {
          node1: {
            id: "node1",
            type: "output-only",
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
          link1: {
            id: "link1",
            from: {
              nodeId: "node1",
              portId: "port1"
            },
            to: {
              nodeId: "node2",
              portId: "port1"
            },
          },
        },
        selected: {},
        hovered: {}
      };
    render() {
        return (
            <div className="mainSpace">
                    <FlowChartWithState initialValue={this.chartSimple} />  
            </div>
        )
    }
}
