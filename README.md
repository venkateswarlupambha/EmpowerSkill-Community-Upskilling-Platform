# SBSPS-Challenge-10091-EmpowerSkill: Community Upskilling Platform

## Category: IBM Cloud Application

## Languages and Technologies Used:
- HTML 🌐
- CSS 🎨
- JavaScript 📜
- Bootstrap 🅱️
- IBM Cloud ☁️
- GitHub 🐙
- IBM Cloud Object Storage 📦

## Open Source Softwares:
- Docker
- Red Hat
- GitHub 🐙

## Project Description:

SkillSwap is a 🕸️ platform that facilitates the exchange of skills and knowledge among individuals within a community. It enables users to connect with others who have complementary skills and interests, fostering a collaborative learning environment.

### Key Features:
1. **User Profiles:** Users can create profiles highlighting their skills, expertise, and areas of interest. They can also specify the skills they want to learn or improve upon.

2. **Skill Listings:** Users can list the skills they have to offer and the skills they are looking to acquire. This creates a searchable 🔍 database of skills within the community, making it easy to find suitable skill exchange partners.

3. **Skill Matching and Messaging:** The application suggests potential matches based on users' listed skills and desired skills. Users can send messages 💬 to connect, discuss their skill exchange goals, and arrange meetings or online sessions.

4. **Skill Exchange Sessions:** SkillSwap provides a platform for users to organize in-person or virtual skill exchange sessions. These sessions can be one-on-one or group-based, depending on the preferences of the participants.

5. **Reviews and Ratings:** After each skill exchange session, users can provide feedback 📝 and ratings ⭐ to rate the quality and effectiveness of the session. This feedback system helps build trust and ensures the credibility of the skills listed by users.

6. **Community Forums and Events:** The application includes community forums where users can engage in discussions 💬, ask questions ❓, and share resources 📚 related to various skills and interests. It also highlights local skill-sharing events and workshops happening in the area.

7. **Skill Badges and Achievements:** SkillSwap rewards users with badges 🏅 or achievements 🏆 for their active participation and successful skill exchanges. These achievements can be showcased on their profiles, adding a gamification 🎮 element and motivating users to continue learning and sharing their skills.

8. **Skill Resources:** SkillSwap provides a repository of resources 📚, such as tutorials, online courses, and recommended books 📖 or websites, to support users in their skill development journey. These resources can be curated by the community or provided by trusted sources.

### Project Screenshots:

![User Profiles](/images/user_profiles.png)
_User Profiles section showcasing users' skills and interests._

![Skill Matching](/images/skill_matching.png)
_Skill Matching and Messaging section helping users connect._

### Installation:

We set up the SkillSwap application and its dependencies:

1. Installed Flask:

   ```powershell
   pip install Flask
   
2. Installed the ibm_db library:

   ```powershell
   pip install ibm_db

### Usage:

1. Create an account or log in to start exploring and listing your skills.
2. Browse through user profiles to find skill matches.
3. Initiate conversations to plan skill exchange sessions.
4. Share your experiences and give feedback through reviews and ratings.
5. Engage in community forums to discuss various skills and learn from others.

### Deployment with Docker:

We deploy the SkillSwap application using Docker:

1. Build the Docker image:

    ```bash
   docker build -t skill .

2. Run the Docker container:
   
    ```bash
   docker run -p 5000:5000 skill
    
 3. For To Tag:
   
    ```bash
      3.1 docker login
      3.2 docker tag skill venkateswarlu2001/empowerskills

 4. To Push The Image

       ```bash
       docker push venkateswarlu2001/empowerskills


### Contribution:

1. repository
2. Create a new branch
3. Make your changes and commit them
4. Push to the branch
5. Create a pull request

## How EmpowerSkill Works as a Learning Platform:

EmpowerSkill facilitates skill and knowledge exchange within a community:

1. **Create a Profile:** Showcase skills and interests, list skills to learn.

2. **Exchange Skills:** Collaborative knowledge sharing.

3. **Arrange Sessions:** Plan in-person or virtual skill sessions.

4. **Connect and Message:** Initiate skill exchange discussions.

5. **Access Resources:** Repository for skill development.

### Links:

- [GitHub Repository](https://github.com/yourusername/empower-skill)
- [Live Demo](https://www.example.com/skillswap)
