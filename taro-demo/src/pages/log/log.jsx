import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'

export default class log extends Component {
    state={
        id:''
    }
    render() {
        return (
            <View>
                {this.state.id}
                log content
            </View>
        )
    }
    componentDidMount(){
        console.log(this.$router.params)
        this.setState({
            id:this.$router.params.id
        })
    }
}
