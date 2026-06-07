function Education() {
    return (
        <section>
            <h1>Education</h1>

            {/* Timeline groups all education history in order */}
            <div className="timeline">
                <div className="timelineItem">
                    <h2>Diploma in Software Engineering Technician</h2>
                    <p><strong>School:</strong> Centennial College</p>
                    <p><strong>Year:</strong> 2026 - 2027</p>
                    <p><strong>Qualification:</strong> Diploma</p>
                </div>

                <div className="timelineItem">
                    <h2>Post graduate Diploma in Wireless Networking</h2>
                    <p><strong>School:</strong> Lambton College Mississauga</p>
                    <p><strong>Year:</strong> 2021 - 2022</p>
                    <p><strong>Qualification:</strong> Diploma</p>
                </div>

                <div className="timelineItem">
                    <h2>Bachelor of Computer Application</h2>
                    <p><strong>School:</strong> Punjabi University Patiala</p>
                    <p><strong>Qualification:</strong> Bachelor's Degree</p>
                </div>
            </div>
        </section>
    );
}

export default Education;