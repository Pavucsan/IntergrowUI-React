import React, {useState} from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

const HelpHeader = () => {
    return(
        <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
            {/* <!-- Content --> */}
            <div class="card-body text-white text-center py-1 px-8 my-3">

                <h1 class="mb-4">
                    <strong>Help & Response</strong>
                </h1>
                <p>
                    <strong>Asking help and response</strong>
                </p>
            </div>
            {/* <!-- Content --> */}
            
        </section> 
    )

}
export default HelpHeader;