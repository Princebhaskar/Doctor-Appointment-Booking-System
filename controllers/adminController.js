// API for adding doctor
const addDoctor = async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        speciality,
        degree,
        experience,
        about,
        fees,
        address,
        image,
        available,
        date,
        slots_booked
      } = req.body;
  
      const newDoctor = new doctorModel({
        name,
        email,
        password,
        speciality,
        degree,
        experience,
        about,
        fees,
        address,
        image,
        available,
        date,
        slots_booked
      });
  
      await newDoctor.save();
      res.status(201).json({ success: true, message: "Doctor added successfully", doctor: newDoctor });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to add doctor", error: error.message });
    }
  };

  export {addDoctor}