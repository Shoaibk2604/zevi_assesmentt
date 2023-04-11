import React from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

const Filter = () => {
  return (<>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item" style={{border:'0px'}}>
    <h2 class="accordion-header"  id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        BRAND
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body" style={{borderBottom:"0.1px solid lightgrey"}}>
        <div className='checkClass'>
        <input type="checkbox" name="mango" id="mango" />
        <label htmlFor="mango"> MANGO </label>
        </div>
        <div className='checkClass'>
        <input type="checkbox" name="hm" id="hm" />
        <label htmlFor="hm"> H&M </label>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{border:'0px'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        PRICE RANGE
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body" style={{borderBottom:"0.1px solid lightgrey"}}>
      <div className='checkClass'>
        <input type="checkbox" name="lowprice" id="lowprice" />
        <label htmlFor="lowprice"> UNDER 500 </label>
        </div>
        <div className='checkClass'>
        <input type="checkbox" name="highprice" id="highprice" />
        <label htmlFor="highprice"> 1000 TO 3000 </label>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{border:'0px'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        RATINGS
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body" style={{borderBottom:"0.1px solid lightgrey"}}>
      <div className='checkClass'>
        <input type="checkbox" name="rating5" id="rating5" />
        <label htmlFor="rating5"><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/> </label>
        </div>
      <div className='checkClass'>
        <input type="checkbox" name="rating4" id="rating4" />
        <label htmlFor="rating4"><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/><AiOutlineStar/> </label>
        </div>
      <div className='checkClass'>
        <input type="checkbox" name="rating3" id="rating3" />
        <label htmlFor="rating3"><AiFillStar className='checked'/><AiFillStar className='checked'/><AiFillStar className='checked'/><AiOutlineStar/><AiOutlineStar/> </label>
        </div>
      <div className='checkClass'>
        <input type="checkbox" name="rating2" id="rating2" />
        <label htmlFor="rating2"><AiFillStar className='checked'/><AiFillStar className='checked'/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/> </label>
        </div>
      <div className='checkClass'>
        <input type="checkbox" name="rating1" id="rating1" />
        <label htmlFor="rating1"><AiFillStar className='checked'/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/> </label>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Filter;
