exports.getHome = (req, res) => {
    res.json({ message: "Welcome to the Home Route!" });
};

exports.getAbout = (req, res) => {
    res.json({ message: "This is the About Route." });
};

exports.getContact = (req, res) => {
    res.json({ message: "Contact us at support@example.com" });
};

exports.getStatus = (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ 
        status: "Server is running", 
        time: currentTime,
        greeting: "Have a productive day!" 
    });
};

exports.handlePostData = (req, res) => {
    const data = req.body;

    // Simple Validation (Bonus)
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "No data provided" });
    }

    res.json({
        message: "Data received successfully!",
        receivedData: data
    });
};