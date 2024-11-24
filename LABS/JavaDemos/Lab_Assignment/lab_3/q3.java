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
//         System.out.println("Movie Id is" + movieId);
//         System.out.println();
//     }

//     public static int getMoviesCount() {
//         return moviesCount;
//     }
// }

// public class q3 {
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

//         System.out.println("Total Movies Created: " + Movie.getMoviesCount());
//     }
// }
