import Navbar from './Navbar';
import LocationDetect from './LocationDetect';
import Content from './Content';
import FoodImages from './FoodImages';

function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <main className="bg-gray-50 py-12 px-6 md:px-16">
        <Content />

        {/* Location and Food Images Section */}
        <div className="mt-12">
          <LocationDetect onLocationChange={(location) => console.log(location)} />
        </div>

        <div className="mt-12">
          <FoodImages />
        </div>
      </main>
    </div>
  );
}

export default Home;
