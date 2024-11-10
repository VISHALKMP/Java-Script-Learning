
        const movies  = [{
          "id": 1,
          "name": "Avengers: Endgame",
          "poster": "https://example.com/posters/avengers_endgame.jpg",
          "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson"],
          "director": "Anthony Russo, Joe Russo",
          "producer": "Kevin Feige",
          "rating": 8.4,
          "language": "English",
          "release_year": 2019,
          "genres": ["Action", "Adventure", "Sci-Fi"]
        },
        {
          "id": 2,
          "name": "RRR",
          "poster": "https://example.com/posters/rrr.jpg",
          "actors": ["N. T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn"],
          "director": "S. S. Rajamouli",
          "producer": "D. V. V. Danayya",
          "rating": 8.0,
          "language": "Telugu",
          "release_year": 2022,
          "genres": ["Action", "Drama", "History"]
        },
        {
          "id": 3,
          "name": "Dangal",
          "poster": "https://example.com/posters/dangal.jpg",
          "actors": ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra", "Aparshakti Khurana"],
          "director": "Nitesh Tiwari",
          "producer": "Aamir Khan, Kiran Rao",
          "rating": 8.4,
          "language": "Hindi",
          "release_year": 2016,
          "genres": ["Biography", "Drama", "Sport"]
        },
        {
          "id": 4,
          "name": "Spider-Man: No Way Home",
          "poster": "https://example.com/posters/spiderman_no_way_home.jpg",
          "actors": ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
          "director": "Jon Watts",
          "producer": "Kevin Feige, Amy Pascal",
          "rating": 8.3,
          "language": "English",
          "release_year": 2021,
          "genres": ["Action", "Adventure", "Sci-Fi"]
        },
        {
          "id": 5,
          "name": "Baahubali: The Beginning",
          "poster": "https://example.com/posters/baahubali_1.jpg",
          "actors": ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
          "director": "S. S. Rajamouli",
          "producer": "Shobu Yarlagadda, Prasad Devineni",
          "rating": 8.0,
          "language": "Telugu",
          "release_year": 2015,
          "genres": ["Action", "Drama", "Fantasy"]
        },
        {
          "id": 6,
          "name": "Inception",
          "poster": "https://example.com/posters/inception.jpg",
          "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
          "director": "Christopher Nolan",
          "producer": "Emma Thomas, Christopher Nolan",
          "rating": 8.8,
          "language": "English",
          "release_year": 2010,
          "genres": ["Action", "Adventure", "Sci-Fi"]
        },
        {
          "id": 7,
          "name": "The Dark Knight",
          "poster": "https://example.com/posters/dark_knight.jpg",
          "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
          "director": "Christopher Nolan",
          "producer": "Charles Roven, Christopher Nolan",
          "rating": 9.0,
          "language": "English",
          "release_year": 2008,
          "genres": ["Action", "Crime", "Drama"]
        },
        {
          "id": 8,
          "name": "Baahubali: The Conclusion",
          "poster": "https://example.com/posters/baahubali_2.jpg",
          "actors": ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
          "director": "S. S. Rajamouli",
          "producer": "Shobu Yarlagadda, Prasad Devineni",
          "rating": 8.2,
          "language": "Telugu",
          "release_year": 2017,
          "genres": ["Action", "Drama", "Fantasy"]
        },
        {
          "id": 9,
          "name": "Titanic",
          "poster": "https://example.com/posters/titanic.jpg",
          "actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Danny Nucci"],
          "director": "James Cameron",
          "producer": "James Cameron, Jon Landau",
          "rating": 7.8,
          "language": "English",
          "release_year": 1997,
          "genres": ["Drama", "Romance"]
        },
        {
          "id": 10,
          "name": "Sholay",
          "poster": "https://example.com/posters/sholay.jpg",
          "actors": ["Amitabh Bachchan", "Dharmendra", "Hema Malini", "Jaya Bachchan"],
          "director": "Ramesh Sippy",
          "producer": "G. P. Sippy",
          "rating": 8.2,
          "language": "Hindi",
          "release_year": 1975,
          "genres": ["Action", "Adventure", "Drama"]
        },
        {
          "id": 11,
          "name": "The Lion King",
          "poster": "https://example.com/posters/lion_king.jpg",
          "actors": ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Whoopi Goldberg"],
          "director": "Roger Allers, Rob Minkoff",
          "producer": "Don Hahn",
          "rating": 8.5,
          "language": "English",
          "release_year": 1994,
          "genres": ["Animation", "Adventure", "Drama"]
        },
        {
          "id": 12,
          "name": "3 Idiots",
          "poster": "https://example.com/posters/3_idiots.jpg",
          "actors": ["Aamir Khan", "Kareena Kapoor", "R. Madhavan", "Sharman Joshi"],
          "director": "Rajkumar Hirani",
          "producer": "Vidhu Vinod Chopra",
          "rating": 8.4,
          "language": "Hindi",
          "release_year": 2009,
          "genres": ["Comedy", "Drama"]
        },
        {
          "id": 13,
          "name": "Jawan",
          "poster": "https://example.com/posters/jawan.jpg",
          "actors": ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi", "Deepika Padukone"],
          "director": "Atlee Kumar",
          "producer": "Gauri Khan",
          "rating": 7.8,
          "language": "Hindi",
          "release_year": 2023,
          "genres": ["Action", "Thriller"]
        },
        {
          "id": 14,
          "name": "The Matrix",
          "poster": "https://example.com/posters/matrix.jpg",
          "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
          "director": "The Wachowskis",
          "producer": "Joel Silver",
          "rating": 8.7,
          "language": "English",
          "release_year": 1999,
          "genres": ["Action", "Sci-Fi"]
        },
        {
          "id": 15,
          "name": "Lagaan",
          "poster": "https://example.com/posters/lagaan.jpg",
          "actors": ["Aamir Khan", "Gracy Singh", "Rachel Shelley", "Amin Hajee"],
          "director": "Ashutosh Gowariker",
          "producer": "Aamir Khan",
          "rating": 8.1,
          "language": "Hindi",
          "release_year": 2001,
          "genres": ["Drama", "Sport"]
        },
        {
          "id": 16,
          "name": "Star Wars: A New Hope",
          "poster": "https://example.com/posters/star_wars_4.jpg",
          "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness"],
          "director": "George Lucas",
          "producer": "Gary Kurtz",
          "rating": 8.6,
          "language": "English",
          "release_year": 1977,
          "genres": ["Action", "Adventure", "Sci-Fi"]
        },
        {
          "id": 17,
          "name": "Jurassic Park",
          "poster": "https://example.com/posters/jurassic_park.jpg",
          "actors": ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough"],
          "director": "Steven Spielberg",
          "producer": "Kathleen Kennedy, Gerald R. Molen",
          "rating": 8.1,
          "language": "English",
          "release_year": 1993,
          "genres": ["Adventure", "Sci-Fi", "Thriller"]
        },
        {
          "id": 18,
          "name": "The Godfather",
          "poster": "https://example.com/posters/godfather.jpg",
          "actors": ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
          "director": "Francis Ford Coppola",
          "producer": "Albert S. Ruddy",
          "rating": 9.2,
          "language": "English",
          "release_year": 1972,
          "genres": ["Crime", "Drama"]
        },
        {
          "id": 19,
          "name": "Pulp Fiction",
          "poster": "https://example.com/posters/pulp_fiction.jpg",
          "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
          "director": "Quentin Tarantino",
          "producer": "Lawrence Bender",
          "rating": 8.9,
          "language": "English",
          "release_year": 1994,
          "genres": ["Crime", "Drama"]
        },
        {
          "id": 20,
          "name": "Avatar",
          "poster": "https://example.com/posters/avatar.jpg",
          "actors": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
          "director": "James Cameron",
          "producer": "James Cameron, Jon Landau",
          "rating": 7.8,
          "language": "English",
          "release_year": 2009,
          "genres": ["Action", "Adventure", "Sci-Fi"]
        }
        // Add additional movie objects here...
      ]
    
      let FiltiringMovies = movies.filter((mov) => mov.release_year >= 2019)
      
      let FindingBookByLanguage = movies.filter((mov)=> {return mov.language === 'Hindi'})


      console.log(FindingBookByLanguage);
      