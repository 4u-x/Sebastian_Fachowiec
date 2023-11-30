import React, { useState } from 'react';
import styles from "../styles/Forma.module.css";

export default function TodoList() {
 

  return (
    <div>
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>My Todo-s</u>
                </p>

                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add new..."/>
                        <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i className="fas fa-calendar-alt fa-lg me-3"></i></a>
                        <div>
                          <button type="button" className="btn btn-primary">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
  
}
