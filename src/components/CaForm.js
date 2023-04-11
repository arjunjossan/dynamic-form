import React, {useState} from 'react'
import './CaForm.css'

function CaForm() {

	const[age,setage] = useState('17');
	const[countrycode,setcountrycode] = useState('+91');

	const ageLimit = (event) =>{
		setage(event.target.value)
	}

	const setcountry = (event) =>{
		setcountrycode(event.target.value)
	}

	const onSubmit = () =>{
		let x = document.getElementById('exampleFormControlInput1').value;
		let y = document.getElementById('exampleFormControlInput2').value;
		let z = document.getElementById('exampleFormControlInput3').value;
		if (x === '') {
			alert('Name cannot be empty')
		}
		else if (y === '') {
			alert('email cannot be empty')
		}
		else if (z === '') {
			alert('contact cannot be empty')
		}
		else{
			alert('Form submmited');
		}
	}

  return (
	<div className='card'>
		<h3>Dynamic Form</h3>
	  <div class="mt-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder="Name . . .  " />
</div>
<div class="mt-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput2" required placeholder="name@example.com" />
</div>

<div className='mt-3'>
<label for="exampleFormControlInput1" class="form-label">Select Country</label>
<select onChange={setcountry} value={countrycode} class="form-select" aria-label="Default select example">
  <option value="+91">India</option>
  <option value="+61">Australia</option>
  <option value="+1">Canada</option>
  <option value="+44">England</option>
</select></div>

<div className="mt-3">
	<label for="exampleFormControlInput1" class="form-label">Contact</label>
  <div className='row'>
	<div className='col-2'>
		<input type="text" class="form-control" id="exampleFormControlInput" value={countrycode} /></div>
	<div className='col-10'>
    <input type="number" class="form-control" required id="exampleFormControlInput3" placeholder="1234567890" /></div>
  </div>
  
</div>

<div class="mt-3">
  <label for="exampleFormControlInput1" class="form-label">Age</label>
  <input type="number" onChange={ageLimit} class="form-control" value={age} id="exampleFormControlInput1" placeholder="name@example.com" />
</div>


{age >= 18 &&
<select class="form-select mt-3" aria-label="Default select example">
  <option selected>Select Occupation</option>
  { age <= 21 &&
  <option value="1">Education</option>
  }

{ age >= 22 &&
	<>
  <option value="2">Doctor</option>
  <option value="3">Engineer</option>
  <option value="3">Farmer</option>
</>
}
</select>
}

<button type="button" onClick={onSubmit} class="btn btn-success mt-4">Success</button>

	</div>
  )
}

export default CaForm
