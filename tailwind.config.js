/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			spacing: {
				"5dp": "5px", // For mobile screens, 1dp is equivalent to 1 px hence this definition for uniformity
				"10dp": "5px",
				"15dp": "15px",
				"20dp": "20px",
				"25dp": "25px",
				"30dp": "30px",
				"35dp": "35px",
				"40dp": "40px",
				"45dp": "45px",
				"50dp": "50px",
			},
		},
	},
	plugins: [],
};
