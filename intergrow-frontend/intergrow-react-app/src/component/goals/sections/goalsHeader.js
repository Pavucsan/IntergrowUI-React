import React from 'react';

class HeaderGoal extends React.Component{
    render(){
        return(
            <section className="card aqua-gradient wow fadeIn  text-uppercase">
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Goals</strong>
                    </h1>
                    <p>
                        <strong>set goals & achive the targer</strong>
                    </p>
                </div>  
            </section>
        )
    }
}
export default HeaderGoal;