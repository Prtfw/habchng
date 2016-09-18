var React = require("react")

var CurChallenge = React.createClass({
   
    onItemClick: function (self, evt) {
        //event.preventDefault(); //don't need this cause it's not a form?

        var challenge = this.props.challenge;
        for (var i = 0; i < challenge.days.length; i++){
            if (challenge.days[i].id == self.id){
                challenge.days[i].win=!self.win
                console.log(challenge.days[i].win)
            }
        }
        var updated =challenge
        console.log(updated)
        this.props.handleDayClick(updated) //passin updated
    },
   
    render() {
        var challenge = this.props.challenge;
        console.log('challenge:', challenge)
        var color = ""
        console.log('challenge.days:',challenge.days)
        var days = challenge.days.map((day) => {
            
            let handleClick = this.onItemClick.bind(this, day);
            //http://derpturkey.com/react-pass-value-with-onclick/ so I can know which day got clicked
            if (day.time=='f') {
                color = 'light-grey'
            } else {
             color = day.win ? 'green' : 'red';
            }
            
            return (
            <div key={day.id} style={{backgroundColor: color, margin: '5px' }} onClick={handleClick}>{day.id} > 
                 {day.id +" "+ day.win}
                 {console.log('rt this.key', day.id)}
            </div>
            );
        })

       
        return <div>
            Here are some days
            {days}
        </div>;
    }
})


module.exports = CurChallenge

