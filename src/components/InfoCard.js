import React from 'react'

export default function InfoCard() {
    return (
        <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    </div>
        
  <div class="card-body">
      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" 
  aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}
