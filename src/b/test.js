// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler, // Filler for area coloring
// } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

// const ThresholdLineChart = () => {


  
//   const one=[
//     {
//       id:1
//     },
//     {
//       id:2
//     },
//     {
//       id:1
//     },
//   ]

//   const onp=one.map(p=>{return p.id})

//   const me=onp.reduce((sum,post)=>{
//     return sum+post
//   })
//   console.log(me)

  

//   const [chartData, setChartData] = useState({
//     labels: Array(20).fill(''), // 20 blank labels for real-time sliding window
//     datasets: [
//       {
//         label: 'System Usage (%)',
//         data: Array(20).fill(0), // Start with 20 zero values
//         borderColor: 'rgba(0, 0, 0, 1)', // Line color
//         borderWidth: 2,
//         pointRadius: 0, // Remove points for smoother line
//         fill: {
//           target: { value: 50 }, // Threshold value for filling
//           above: 'rgba(0, 255, 0, 0.3)', // Green for above threshold
//           below: 'rgba(255, 0, 0, 0.3)', // Red for below threshold
//         },
//         tension: 0.4, // Smooth the line
//       },
//     ],
//   });

//   // Simulate real-time data updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newData = Math.floor(Math.random() * 200); // Random value between 0 and 100

//       setChartData((prev) => {
//         const updatedLabels = [...prev.labels.slice(1), '']; // Keep labels sliding
//         const updatedData = [...prev.datasets[0].data.slice(1), newData]; // Add new data point

//         return {
//           ...prev,
//           labels: updatedLabels,
//           datasets: [
//             {
//               ...prev.datasets[0],
//               data: updatedData, // Update dataset with new data
//             },
//           ],
//         };
//       });
//     }, 1000); // Update every second

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   // Chart options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false }, // Hide legend
//     },
//     scales: {
//       x: {
//         grid: { display: false }, // Hide x-axis gridlines
//         ticks: { display: false }, // Hide x-axis ticks
//       },
//       y: {
//         grid: { color: '#e0e0e0' }, // Subtle gridlines
//         ticks: {
//           stepSize: 20, // Step size for y-axis ticks
//           color: '#888', // Ticks color
//         },
//         suggestedMin: 0, // Minimum y-axis value
//         suggestedMax: 100, // Maximum y-axis value
//       },
//     },
//   };

//   return (
//     <div style={{ width: '100%', height: '300px' }}>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default ThresholdLineChart;



import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Test = () => {
  const [chartDataList, setChartDataList] = useState(() => loadStoredCharts());
  const [selectedChartId, setSelectedChartId] = useState(null);

  // Generate random chart data
  const generateChartData = () => {
    const now = new Date();
    return {
      id: now.toISOString(), // Unique identifier based on timestamp
      timestamp: now.toLocaleString(), // Human-readable timestamp
      data: {
        labels: Array.from({ length: 10 }, (_, i) => `Label ${i + 1}`),
        datasets: [
          {
            label: `Dataset - ${now.toLocaleTimeString()}`,
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      },
    };
  };

  // Load stored charts from localStorage
  const loadStoredCharts = () => {
    const storedCharts = localStorage.getItem("charts");
    return storedCharts ? JSON.parse(storedCharts) : [];
  };

  // Save charts to localStorage
  const saveChartsToStorage = (charts) => {
    localStorage.setItem("charts", JSON.stringify(charts));
  };

  // Automatically create a new chart every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const newChart = generateChartData();
      setChartDataList((prevCharts) => {
        const updatedCharts = [...prevCharts, newChart];
        saveChartsToStorage(updatedCharts); // Save to localStorage
        return updatedCharts;
      });
      setSelectedChartId(newChart.id); // Automatically select the latest chart
    }, 60000); // One minute interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Create an initial chart if none exist
  useEffect(() => {
    if (chartDataList.length === 0) {
      const initialChart = generateChartData();
      setChartDataList([initialChart]);
      setSelectedChartId(initialChart.id);
      saveChartsToStorage([initialChart]);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>Dynamic Charts</h1>

      {/* Dropdown to select a chart */}
      <label htmlFor="chartSelector">Select a Chart:</label>
      <select
        id="chartSelector"
        value={selectedChartId || ""}
        onChange={(e) => setSelectedChartId(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="" disabled>
          -- Select a Chart --
        </option>
        {chartDataList.map((chart) => (
          <option key={chart.id} value={chart.id}>
            {chart.timestamp}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px", width: "100%", height: "400px" }}>
        {selectedChartId ? (
          <Line
            data={chartDataList.find((chart) => chart.id === selectedChartId).data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        ) : (
          <p>Please select a chart to display.</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            const newChart = generateChartData();
            setChartDataList((prevCharts) => {
              const updatedCharts = [...prevCharts, newChart];
              saveChartsToStorage(updatedCharts);
              return updatedCharts;
            });
            setSelectedChartId(newChart.id);
          }}
          style={{ marginRight: "10px", padding: "10px", cursor: "pointer" }}
        >
          Create New Chart
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("charts");
            setChartDataList([]);
            setSelectedChartId(null);
          }}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Reset All Charts
        </button>
      </div> 
    </div>
  );
};

export default Test;
