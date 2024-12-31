# Tugas-6 Movie App - React Auth Context

## Project Description
Tugas-6 Movie App is a React-based web application that allows users to browse trending movies, view detailed information about each movie, and manage their favorite movies. The application utilizes an authentication context to manage user login sessions and store favorite movies.

## Features and Functionality
- **User Authentication**: Users can log in and manage their sessions.
- **Movie Browsing**: Display a list of trending movies retrieved from The Movie Database (TMDB) API.
- **Movie Details**: View detailed information about each movie, including its genres, release date, and overview.
- **Favorites Management**: Users can add or remove movies from their favorites list.
- **Responsive Design**: The application is optimized for various screen sizes.

## Technology Stack
- **Frontend**: 
  - React
  - React Router
  - Axios
  - Tailwind CSS (for styling)
- **APIs**: 
  - The Movie Database (TMDB) API

## Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/bimapopo345/Tugas-6_Movie-App-React-Auth-Context-React_Bima-Prawang-Saputra_SinauCoding_FullStack-Web-Dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Tugas-6_Movie-App-React-Auth-Context-React_Bima-Prawang-Saputra_SinauCoding_FullStack-Web-Dev
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage Guide
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.
3. Use the login modal to authenticate and start interacting with the app.
4. Browse movies, view details, and manage your favorites.

## API Documentation
The application utilizes the TMDB API to fetch movie data. Here are the key API endpoints used:

- **Fetch Trending Movies**: 
  - `GET https://api.themoviedb.org/3/trending/movie/week`
- **Search Movies**: 
  - `GET https://api.themoviedb.org/3/search/movie?query={query}`
- **Get Movie Details**: 
  - `GET https://api.themoviedb.org/3/movie/{movieId}`

**Note**: Ensure to replace `{query}` and `{movieId}` with appropriate values when making requests.

## Contributing Guidelines
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Create a new Pull Request.

## License Information
This project does not have a specified license. Please refer to the repository for any updates regarding licensing.

## Contact/Support Information
For support or inquiries, please reach out via GitHub issues or contact the project maintainer at **bimapopo345** on GitHub.

---

Feel free to customize any sections of this README to better fit your project or include additional information as needed!
