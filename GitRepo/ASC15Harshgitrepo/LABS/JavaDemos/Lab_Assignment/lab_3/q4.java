// package Training.JavaDemos.Lab_Assignment.lab_3;

// class Movie {
//     private String movieName;
//     private String producedBy;
//     private String directedBy;
//     private int duration;
//     private int year;
//     private String category;

//     private static int moviesCount = 0;
    
//     private final String movieId;

//     public Movie(String movieName, String producedBy) {
//         if (movieName == null || movieName.isEmpty() || producedBy == null || producedBy.isEmpty()) {
//             throw new IllegalArgumentException("Movie name and produced by fields are mandatory and cannot be empty.");
//         }
//         this.movieName = movieName;
//         this.producedBy = producedBy;
//         moviesCount++;
//         this.movieId = movieName + "_" + moviesCount;
//     }

//     public Movie(String movieName, String producedBy, String directedBy, int duration, int year, String category) {
//         this(movieName, producedBy);
//         this.directedBy = directedBy;
//         this.duration = duration;
//         this.year = year;
//         this.category = category;
//     }

//     public String getMovieName() {
//         return movieName;
//     }

//     public void setMovieName(String movieName) {
//         this.movieName = movieName;
//     }

//     public String getProducedBy() {
//         return producedBy;
//     }

//     public void setProducedBy(String producedBy) {
//         this.producedBy = producedBy;
//     }

//     public String getDirectedBy() {
//         return directedBy;
//     }

//     public void setDirectedBy(String directedBy) {
//         this.directedBy = directedBy;
//     }

//     public int getDuration() {
//         return duration;
//     }

//     public void setDuration(int duration) {
//         this.duration = duration;
//     }

//     public int getYear() {
//         return year;
//     }

//     public void setYear(int year) {
//         this.year = year;
//     }

//     public String getCategory() {
//         return category;
//     }

//     public void setCategory(String category) {
//         this.category = category;
//     }

//     public String getMovieId() {
//         return movieId;
//     }

//     public void displayMovieInfo() {
//         System.out.println("Movie ID: " + movieId);
//         System.out.println("Movie Name: " + movieName);
//         System.out.println("Produced By: " + producedBy);
//         System.out.println("Directed By: " + directedBy);
//         System.out.println("Duration: " + duration + " minutes");
//         System.out.println("Year: " + year);
//         System.out.println("Category: " + category);
//         System.out.println("Movie Id is: " + movieId);
//         System.out.println();
//     }

//     public static int getMoviesCount() {
//         return moviesCount;
//     }
// }

// class SpecialMovie extends Movie {
//     private String soundEffects;
//     private String visualEffects;

//     public SpecialMovie(String movieName, String producedBy, String soundEffects, String visualEffects) {
//         super(movieName, producedBy);
//         this.soundEffects = soundEffects;
//         this.visualEffects = visualEffects;
//     }

//     public SpecialMovie(String movieName, String producedBy, String directedBy, int duration, int year, String category, String soundEffects, String visualEffects) {
//         super(movieName, producedBy, directedBy, duration, year, category);
//         this.soundEffects = soundEffects;
//         this.visualEffects = visualEffects;
//     }

//     public String getSoundEffects() {
//         return soundEffects;
//     }

//     public void setSoundEffects(String soundEffects) {
//         this.soundEffects = soundEffects;
//     }

//     public String getVisualEffects() {
//         return visualEffects;
//     }

//     public void setVisualEffects(String visualEffects) {
//         this.visualEffects = visualEffects;
//     }

//     @Override
//     public void displayMovieInfo() {
//         super.displayMovieInfo();
//         System.out.println("Sound Effects: " + soundEffects);
//         System.out.println("Visual Effects: " + visualEffects);
//         System.out.println();
//     }
// }

// class InternationalMovie extends Movie {
//     private String country;
//     private String language;

//     public InternationalMovie(String movieName, String producedBy, String country, String language) {
//         super(movieName, producedBy);
//         this.country = country;
//         this.language = language;
//     }

//     public InternationalMovie(String movieName, String producedBy, String directedBy, int duration, int year, String category, String country, String language) {
//         super(movieName, producedBy, directedBy, duration, year, category);
//         this.country = country;
//         this.language = language;
//     }

//     public String getCountry() {
//         return country;
//     }

//     public void setCountry(String country) {
//         this.country = country;
//     }

//     public String getLanguage() {
//         return language;
//     }

//     public void setLanguage(String language) {
//         this.language = language;
//     }

//     @Override
//     public void displayMovieInfo() {
//         super.displayMovieInfo();
//         System.out.println("Country: " + country);
//         System.out.println("Language: " + language);
//         System.out.println();
//     }
// }

// public class q4 {
//     public static void main(String[] args) {
//         Movie movie1 = new Movie("Inception", "Christopher Nolan");
//         movie1.setDirectedBy("Christopher Nolan");
//         movie1.setDuration(148);
//         movie1.setYear(2010);
//         movie1.setCategory("Sci-Fi");

//         System.out.println("Movie 1 Information:");
//         movie1.displayMovieInfo();

//         Movie movie2 = new Movie("The Dark Knight", "Christopher Nolan", "Christopher Nolan", 152, 2008, "Action");

//         System.out.println("Movie 2 Information:");
//         movie2.displayMovieInfo();

//         SpecialMovie specialMovie = new SpecialMovie("Avatar", "James Cameron", "Dolby Atmos", "3D");
//         specialMovie.setDirectedBy("James Cameron");
//         specialMovie.setDuration(162);
//         specialMovie.setYear(2009);
//         specialMovie.setCategory("Action");

//         System.out.println("Special Movie Information:");
//         specialMovie.displayMovieInfo();

//         InternationalMovie internationalMovie = new InternationalMovie("Parasite", "Bong Joon-ho", "South Korea", "Korean");
//         internationalMovie.setDirectedBy("Bong Joon-ho");
//         internationalMovie.setDuration(132);
//         internationalMovie.setYear(2019);
//         internationalMovie.setCategory("Thriller");

//         System.out.println("International Movie Information:");
//         internationalMovie.displayMovieInfo();

//         System.out.println("Total Movies Created: " + Movie.getMoviesCount());
//     }
// }
