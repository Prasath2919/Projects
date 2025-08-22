define("weather", [], function () {
    function createWidget() {
        widget.addEvents({
            onLoad: function () {
                const Main_container = UWA.createElement("div", {
                    id: "main-container",
                    class: "main-class",
                    styles: {
                        padding: "10px",
                        width: "250px",
                        height: "330px",
                        margin: "10px 0 10px 60px",
                        borderRadius: "5px",
                        background: "linear-gradient(344deg,rgba(15, 89, 168, 1) 0%, rgba(0, 247, 255, 1) 68%)"
                    }
                });

                const searchWrapper = UWA.createElement("div", {
                    styles: {
                        position: "relative",
                        width: "80%",
                        padding: "8px 0px 8px 0px"
                        // margin: "0 auto"
                    }
                });

                // Input field
                const searchInput = UWA.createElement("input", {
                    id: "search-input",
                    placeholder: "Enter City",
                    styles: {
                        borderRadius: "15px",
                        border: "1px solid #ccc",
                        width: "100%",
                        padding: "5px 15px 5px 10px",
                        outline: "none",
                        marginLeft: "7%"
                    }
                });

                // Clickable image inside the input
                const searchIcon = UWA.createElement("img", {
                    src: "images/search.png", // your image path
                    alt: "Search",
                    styles: {
                        position: "absolute",
                        left: "100%",
                        top: "30%",
                        // bottom:"90%",
                        // transform: "translateY(-50%)",
                        // width: "18px",
                        height: "14px",
                        cursor: "pointer"
                    },

                });
                const errorMessage = UWA.createElement("div", {
                    id: "error-message",
                    styles: {
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                        textAlign: "center"
                    }
                });

                //image section
                const weather = UWA.createElement("div", {
                    class: "weather",
                    styles: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                })

                const weatherImage = UWA.createElement("img", {
                    src: "images/clear.png",
                    alt: "weather",
                    class: "weather-icon",
                    styles: {
                        height: "90px",
                        width: "90px"
                    }
                })

                const temp = UWA.createElement("h1", { class: "temp", html: "100°c", styles: { color: "white", fontSize: "50px", margin: "0px" } })
                const city = UWA.createElement("h2", { class: "city", html: "Tamilnadu", styles: { color: "white", fontSize: "30px", margin: "0px", padding: "10px", fontWeight: "normal" } })

                const footer = UWA.createElement("div", { class: "footer", styles: { display: "flex", justifyContent: "center", paddingTop: "10px" } })

                //humidity
                const humidityWrapper = UWA.createElement("div",
                    {
                        class: "humidity-wrapper",
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "auto 1fr",
                            // gridTemplateRows: "auto auto",
                            // alignItems: "center",
                            columnGap: "4px",
                            // rowGap: "2px", 
                            padding: "10px 10px"
                        }

                    })
                const humidityIcon = UWA.createElement("img", {
                    id: "humidity-icon",
                    src: "images/humidity.png",
                    alt: "humidity",
                    styles: {
                        height: "35px",
                        width: "35px",
                        gridRow: "1/span 2",
                        gridColumn: "1",
                    }
                })


                const percent = UWA.createElement("h4", { class: "percent", html: "48%", styles: { color: "white", fontSize: "15px", marginTop: "5px", marginBottom: "5px", gridRow: "1", gridColumn: "2" } })
                const humidityName = UWA.createElement("h4", { class: "humidity-name", html: "Humidity", styles: { color: "white", margin: "0", fontSize: "10px", gridRow: "2", gridColumn: "2" } })



                const windWrapper = UWA.createElement("div",
                    {
                        class: "wind-wrapper",
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "auto 1fr",
                            // gridTemplateRows: "auto auto",
                            // alignItems: "center",
                            columnGap: "4px",
                            // rowGap: "2px", 
                            padding: "10px 10px"
                        }

                    })
                const windIcon = UWA.createElement("img", {
                    id: "wind-icon",
                    src: "images/wind.png",
                    alt: "humidity",
                    styles: {
                        height: "35px",
                        width: "35px",
                        gridRow: "1/span 2",
                        gridColumn: "1",
                    }
                })


                const KmHour = UWA.createElement("h4", { class: "KmHour", html: "10Km/h", styles: { color: "white", fontSize: "15px", marginTop: "5px", marginBottom: "5px", gridRow: "1", gridColumn: "2" } })
                const windSpeed = UWA.createElement("h4", { class: "wind-speed", html: "speed", styles: { color: "white", fontSize: "10px", margin: "0", gridRow: "2", gridColumn: "2" } })

                // Inject 
                searchWrapper.addContent([searchInput, searchIcon, errorMessage]);
                weather.addContent([weatherImage, temp, city])
                humidityWrapper.addContent([humidityIcon, percent, humidityName])
                windWrapper.addContent([windIcon, KmHour, windSpeed])
                footer.addContent([humidityWrapper, windWrapper])
                Main_container.addContent([searchWrapper, weather, footer]);
                Main_container.inject(widget.body)
                const weatherData = fetch("https://a5f70ada92f744bca9dab72667450ae0.api.mockbin.io/")
                // weatherData
                //     .then(res => res.json())
                //     .then(data => {

                //         searchIcon.addEvent("click", () => {
                //             const inputValue = searchInput.value.trim().toLowerCase();
                //             // console.log(data[0].city);
                //             const matchCity = data.find(item => item.city.toLowerCase() === inputValue)


                //             if (matchCity) {
                //                 errorMessage.setText("");
                //                 percent.setText(matchCity.humidity)
                //                 KmHour.setText(matchCity.windSpeed)
                //                 weatherImage.setAttribute("src", data.weather[0].main);
                //                 temp.setText(matchCity.temperature + "°c");
                //                 city.setText(matchCity.city);

                //             }

                //             else {
                //                 errorMessage.setText("Sorry, no data found for that country.");

                //                 // alert(" Sorry, no data found for that country.")
                //             }
                //         })




                //     })
                const apiKey = "f52a3af9eea67fe6acf99e239b8dc20c"
                const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
                // const inputValue = searchInput.value.trim().toLowerCase();

                async function checkWeather(inputValue) {
                    if (!inputValue) {
                        errorMessage.setText("Please enter a city name.");
                        return;
                    }

                    try {
                        const response = await fetch(apiUrl + inputValue + `&appid=${apiKey}`);
                        const data = await response.json();

                        let now = new Date();
                        console.log(now.getDate());

                        console.log(data);


                        // if (data.cod === "404") {
                        //     errorMessage.setText("City not found.");
                        //     return;
                        // }


                        errorMessage.setText("");
                        percent.setText(data.main.humidity + "%");
                        KmHour.setText(data.wind.speed + "km/h");
                        temp.setText(data.main.temp + "°c");
                        city.setText(data.name);
                        weatherImage.setAttribute("src", "images/" + data.weather[0].main.toLowerCase() + ".png");



                    } catch (err) {
                        errorMessage.setText(" Sorry, no data found for that city.");
                        console.error(err);
                    }
                }

                searchIcon.addEvent("click", function () {
                    const inputValue = searchInput.value.trim().toLowerCase();
                    checkWeather(inputValue);
                });

            }
        })
        // return Main_container;

    }
    return { createWidget }
})