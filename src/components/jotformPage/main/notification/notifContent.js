import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux'
import { isLoading } from '../../../../action/loginAction';
import Submission from '../content/submission';
import { backendSubs } from '../../../../api/restApi/api';
class NotifContent extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      name: '',
      product: '',
      amount: '',
      status: '',
      submission: [],
      checker: true
    }
  }
  componentWillMount = async () => {
    await backendSubs('getSubmission', {
      flowId : this.props.flow.id
    })
      .then(res => {
        res.data.map(data => {
          console.log(data)
          if(data.sub_key == 'name'){
            this.setState({
              name: data.answer
            })
          }
          else if(data.sub_key == 'product'){
            this.setState({
              product: data.answer
            })
          }
          else if(data.sub_key == 'amount'){
            this.setState({
              amount: data.answer
            })
          } 
          else if(data.status == '1'){
            this.setState({
              status: 'Waiting...'
            })
          }
          else if(data.status == '2'){
            this.setState({
              status: 'Stock Department -> Cargo Department'
            })
          }
          else if(data.status == '3'){
            this.setState({
              status: 'Completed.'
            })
          }
          this.setState({
            submission: [...this.state.submission, {
              name: this.state.name,
              amount: this.state.amount,
              product: this.state.product,
              status: this.state.status
            }]

          })
        })  
      })
  }
  render() {
    return (
      <div>
        <div className='notifContent'>
          <div className="card">
            <Collapsible trigger={`${this.props.flow.flowTitle} ↓`} >
              <table>
                <thead>
                  <tr>
                    <th>Name Surname</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {
                  this.state.submission.map(mod => {
                    if(mod.name != '' && mod.amount != '' && mod.product != '' && mod.product != '' && this.state.checker == true){
                      return <Submission sub={mod}/>
                    }
                  })
                }
              </table>
            </Collapsible>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loadingReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLoading: (value) => dispatch(isLoading(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifContent)