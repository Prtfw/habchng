    var React = require("react")
    var ReactDom = require("react-dom")
    var {Route, Router, IndexRoute, hashHistory, browserHistory} = require("react-router")


    var CurChallenge = require("./compos/cur_challenge");
    var NewChallenge = require("./compos/new_challenge");

    //load foundation 
    //require("style!css!foundation-sites/dist/foundation.min.css")
    
    $(document).foundation()
    require("style!css!sass!appcss")
    
    /* //ES6 destructuring syntax 
       var Route = require('react-router').Route ect... 
       var obj={name: 'mads'} || var {name} = obj: <=> var name = obj.name
    */

    var Main = React.createClass({
        getInitialState() {
            var store = {
                challenge: {
                    name: 'tester',
                    days: [
                        {
                            id:'d1',
                            time: "p",
                            win: true,
                        },
                        {
                            id:'d2',
                             time: "n",
                            win: false,
                        },
                        {
                            id:'d3',
                            time: "f",
                            win: true,
                        }
                    ]
                },
            }
            return store;
        },
        
    
         handleDayClick: function (updated) {
             
             //change the day that's updated's win = true 
             //then call setstate
            console.log('app.jsx  - DayClick', updated)
            //updated changlleng
            this.setState({challenge: updated})
        },
        
        handleNewChallange: function (challenge) {
            console.log('app.jsx', challenge)
            this.setState({challenge: challenge})
        },
        render() {
            return <div>
                <NewChallenge handleNewChallange={this.handleNewChallange}/>
                <CurChallenge challenge={this.state.challenge}  handleDayClick= {this.handleDayClick}/> 
            </div>
        }
    });
   
    ReactDom.render(
        <Main />,
        document.getElementById('app')
    );    

        
//when button gets clicked, call a parent function on the prop called child'name=parentfunctionName = setState
//hook up statevar=updated name to the rendering compo = passin

//containers has state, dumb compo don't
//can't ever update props... you just get those, can update state tho if container
//containers should not do much other than rendering children (should have a root div but that's about it)