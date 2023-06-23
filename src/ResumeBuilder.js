import React, { useState } from 'react';
import './CSS/ResumeBuilder.css';
const ResumeBuilder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [educationFields, setEducationFields] = useState([{ institute: '', year: '', degree: '' }]);
    const [experienceFields, setExperienceFields] = useState([{ company: '', year: '', designation: '' }]);
    const [skills, setSkills] = useState([]);

    const handleEducationChange = (index, field, value) => {
        const updatedFields = [...educationFields];
        updatedFields[index][field] = value;
        setEducationFields(updatedFields);
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedFields = [...experienceFields];
        updatedFields[index][field] = value;
        setExperienceFields(updatedFields);
    };

    const handleAddEducationField = () => {
        setEducationFields([...educationFields, { institute: '', year: '', degree: '' }]);
    };

    const handleAddExperienceField = () => {
        setExperienceFields([...experienceFields, { company: '', year: '', designation: '' }]);
    };

    const handleSkillsChange = (e) => {
        setSkills(e.target.value.split(','));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data (e.g., submit to a server or display in console)
        console.log({
            name,
            email,
            address,
            phone,
            educationFields,
            experienceFields,
            skills
        });
    };

    return (
        <div>
            <div className="resume-builder">
                <h1>Resume Builder</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>

                    <h2>Education</h2>
                    {educationFields.map((field, index) => (
                        <div key={index}>
                            <div>
                                <input
                                    type="text"
                                    value={field.institute}
                                    placeholder="Institute"
                                    onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={field.year}
                                    placeholder="Year"
                                    onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={field.degree}
                                    placeholder="Degree"
                                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddEducationField}>Add More</button>

                    <h2>Experience</h2>
                    {experienceFields.map((field, index) => (
                        <div key={index}>
                            <div>
                                <input
                                    type="text"
                                    value={field.company}
                                    placeholder="Company"
                                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={field.year}
                                    placeholder="Year"
                                    onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={field.designation}
                                    placeholder="Designation"
                                    onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddExperienceField}>Add More</button>

                    <h2>Skills</h2>
                    <div>
                        <input type="text" value={skills.join(',')} placeholder="Add skills" onChange={handleSkillsChange} />
                    </div>

                    <button type="submit">Create Resume</button>
                </form>
            </div>
        </div>
    );
};

export default ResumeBuilder;
