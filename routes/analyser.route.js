const express = require("express");
const router = express.Router();
const { Job } = require("../model/job.model");
const { User } = require("../model/user.model");
// const { jobsData } = require('../db/jobs');

router.route('/')
	.get(async (req, res) => {
		try {
			// await Job.insertMany(jobsData);
			const { userId } = req.user;
			const jobs = await Job.find({});
			const userData = await User.findById({ _id: userId });
			const matchedJobs = jobs.filter(job => job.requirements.some(skill => userData.skills.includes(skill)));
			res.json({ success: true, matchedJobs, userSkills: userData.skills  });
		} catch (error) {
			console.error(error);
		}
	})

	.post(async (req, res) => {
		const { userId } = req.user;
		const { skills } = req.body;
		const allSkills = skills.map(skill => skill.toLowerCase());
		await User.findByIdAndUpdate({ _id: userId }, { skills: allSkills });
		res.json({ success: true, skills });
	})

module.exports = router;