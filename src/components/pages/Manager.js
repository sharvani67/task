import React from 'react';

const Manager = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Employee Registered Successfully!');
        // Further processing (e.g., API call) goes here
    };

    return (
        
           

            <div className="container mt-5 p-4 border rounded shadow bg-light">
                <h2 className="text-center mb-4 text-primary">Manager Registration Form</h2>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="mobile" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">PAN Card Number</label>
                            <input type="text" className="form-control" name="pancard" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Salary (INR)</label>
                            <input type="number" className="form-control" name="salary" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Bank Account Number</label>
                            <input type="text" className="form-control" name="bankAccount" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">PF No</label>
                            <input type="text" className="form-control" name="pfNumber" required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Address</label>
                        <textarea className="form-control" name="address" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        
    );
};

export default Manager;
