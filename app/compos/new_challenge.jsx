var React = require("react")
var ReactDom = require("react-dom")


var NewChallenge = React.createClass({
    
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.refs.name.value)
        var challenge ={}
        
        var days = []
        challenge.name = this.refs.name.value
        if (parseInt(this.refs.days.value)){
            console.log('loop')
            
            for (var i = 1; i < parseInt(this.refs.days.value)+1; i++){
                days.push({id:i})
            }
        }
        challenge.days = days
        challenge.failmsg = this.refs.failmsg.value.split(',')
        challenge.winmsg = this.refs.failmsg.value.split(',')
        challenge.reward = this.refs.reward.value
        
       // console.log(challenge)
       // = this.state;
        
        this.props.handleNewChallange(challenge);
        //console.log(challenge)
    },
    
    // handleInput(event) {
        
    //     var state = {};
    //     var updwhat = event.target.name
    //     console.log('event.target', event.target)
    //     if (updwhat == "name" ||updwhat == "reward" ){
    //         state[event.target.name] = event.target.value
            
    //     }
    //     else if (updwhat == "failmsg" || updwhat == "winmsg" ){
    //         state[event.target.name] = event.target.value.split(',')
    //     }
    //     else if (updwhat == "days"){
    //       // state[event.target.name] = event.target.value.split(',')
    //       console.log('update days')
    //     }
    //     console.log('state', state)
    //     this.setState(state);
        
    // },
    

    render() {
        return <div>
            <form ref='challenge_form' onSubmit={this.handleSubmit}>
                 <input type='text' onblur={this.handleInput} ref='name' placeholder="challenge name"/> 
                <input type='text' onChange={this.handleInput} ref="days" placeholder="# of days"/> 
                <input type='text' onChange={this.handleInput} ref="failmsg" placeholder="fail messages separated by commas"/> 
                <input type='text' onChange={this.handleInput} ref="winmsg" placeholder="win messages separated by commas"/> 
                <input type='text' onChange={this.handleInput} ref="reward" placeholder="reward"/> 
                <input type='submit' />
            </form>
        </div>;
    }
});
    
module.exports = NewChallenge;