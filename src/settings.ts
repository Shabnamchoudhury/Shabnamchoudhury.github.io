export const profile = {
	fullName: "Shabnam Choudhury",
	title: "AI researcher",
	institute: "Indian Instutute of Technology, Bombay",
	author_name: "Choudhury, S.", // Author name to be highlighted in the papers section,
	profileStatement:
		"Aspiring AI researcher with a strong background in deep learning, computer vision for remote sensing, and multimodal data. Eager to apply cutting-edge machine learning techniques to solve real-world problems at the intersection of artificial intelligence and remote sensing applications. Passionate about contributing to transformative research in AI and remote sensing technologies.",
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{
			title: "Computer Vision",
			description:
				"My research focuses on applying deep learning and computer vision techniques to remote sensing data for land use classification and environmental monitoring.",
			field: "computer-science",
		},
		{
			title: "Deep Learning",
			description:
				"I am interested in developing robust deep learning models for automated analysis of satellite imagery, with applications in object detection and scene understanding.",
			field: "engineering",
		},
		{
			title: "Remote Sensing",
			description:
				"My work explores the integration of computer vision and remote sensing to enhance data-driven approaches for geospatial analysis and disaster assessment.",
			field: "computer-science",
		},
	],
	research_statement:
		"My research centers on advancing the frontiers of artificial intelligence through deep learning and computer vision, with a particular focus on remote sensing and multimodal data integration. By leveraging state-of-the-art machine learning methodologies, I strive to address complex real-world challenges at the intersection of AI and geospatial intelligence, contributing to transformative innovations in environmental monitoring, Earth observation, and beyond.",
	current_projects: [
		{
			title: "Proposed X-JEPA",
			description:
				"A novel self-supervised framework for cross-modal remote sensing retrieval via predictive semantic alignment.",
		},
		{
			title: "Developed ReJEPA",
			description:
				"A novel self-supervised learning model for multimodal remote sensing, integrating masked modeling and joint predictive architectures.",
		},
		{
			title: "Developed AMVG",
			description:
				"AMVG, the most efficient visual grounding framework in remote sensing to date, achieving state-of-the-art performance across all major RS datasets.",
		},
		{
			title: "Designed SPCA-Net",
			description:
				"Designed a cross-modal retrieval framework SPCA-Net leveraging a unified attention network to boost semantic alignment across heterogeneous remote sensing data.",
		},
	],
	research_impact:
		"My research has significantly advanced the field of remote sensing by introducing novel deep learning architectures for visual grounding, cross-modal retrieval, and semantic alignment. Through innovative frameworks such as REJEPA, CrossVG, and X-JEPA, my work has enabled more accurate interpretation and retrieval of complex geospatial data. These contributions have laid the groundwork for intelligent Earth observation systems, with wide-ranging applications in environmental monitoring, low-shot classification, and sustainable agriculture. By bridging the gap between computer vision and remote sensing through multimodal learning, my research continues to shape next-generation AI solutions for planetary-scale challenges.",
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: "shabnamchoudhury@iitb.ac.in",
	linkedin: "https://in.linkedin.com/in/shabnam-choudhury-b623bb16a",
	x: "",
	github: "https://github.com/Shabnamchoudhury/",
	gitlab: "",
	scholar: "https://scholar.google.com/citations?user=VUf1bx0AAAAJ&hl=en",
	inspire: "",
	arxiv: "",
};

export const template = {
	website_url: "https://Shabnamchoudhury.github.io", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: "autumn", // Select one of the Daisy UI Themes or create your own. Does not work. Edit in src/components/Head.astro
	darkTheme: "sunset", // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: "", // Repository name starting with /
};

export const seo = {
	default_title: "Shabnam Choudhury Portfolio",
	default_description: "Shabnam Choudhury Portfolio and personal website.",
	default_image: "/images/astro-academia.png",
};
