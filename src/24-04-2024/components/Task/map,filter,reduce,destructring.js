const IplMatches = () => {


    const iplMatchesdetails = [


        {
            TeamName: "Mumbai Indians",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Rohit sharama",
            tropies: 5,
            PlayerStrikerate: [
                {
                    name: "Rohit",
                    avgstrikerate: 225
                },
                {
                    name: "Ishan",
                    avgstrikerate: 250
                },
                {
                    name: "Hardik",
                    avgstrikerate: 185
                },
                {
                    name: "Suryakumar Yadav",
                    avgstrikerate: 235
                },
                {
                    name: "Dewald Brevis",
                    avgstrikerate: 240
                },
                {
                    name: "Jasprit Bumrah",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Chennai super kings ",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Ms Dhoni",

            tropies: 5,
            PlayerStrikerate: [
                {
                    name: " Ruturaj Gaikwad",
                    avgstrikerate: 225
                },
                {
                    name: "Rachin Ravindra",
                    avgstrikerate: 195
                },
                {
                    name: "Ajinkya Rahane",
                    avgstrikerate: 220
                },
                {
                    name: "Daryl Mitchell",
                    avgstrikerate: 185
                },
                {
                    name: "Ravindra Jadeja",
                    avgstrikerate: 245
                },
                {
                    name: "Sameer Rizvi",
                    avgstrikerate: 185
                },
                {
                    name: "MS Dhoni(w)",
                    avgstrikerate: 333
                },
            ]
        },
        {
            TeamName: "Royal challenge Bangolre",
            Matchvenue: "Delhi cricket stadium",
            Teamcaptian: "Faf du Plessis (c)",

            tropies: 0,
            PlayerStrikerate: [
                {
                    name: "Kohil",
                    avgstrikerate: 225
                },
                {
                    name: "Faf du Plessis",
                    avgstrikerate: 165
                },
                {
                    name: "Dinesh Karthik",
                    avgstrikerate: 185
                },
                {
                    name: "Glenn Maxwell",
                    avgstrikerate: 214
                },
                {
                    name: "Cameron Green",
                    avgstrikerate: 220
                },
                {
                    name: "Mahipal Lomror",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Rajasthan Royals",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Sanju Samson",
            tropies: 4,
            PlayerStrikerate: [
                {
                    name: "Dhruv Jurel",
                    avgstrikerate: 225
                },
                {
                    name: "Kunal Singh Rathore",
                    avgstrikerate: 250
                },
                {
                    name: "Shimron Hetmyer",
                    avgstrikerate: 185
                },
                {
                    name: "Shubham Dubey",
                    avgstrikerate: 221
                },
                {
                    name: "Yashasvi Jaiswal",
                    avgstrikerate: 185
                },
                {
                    name: "Keshav Maharaj",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Delhi Capitals",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Rishabh Pant",

            tropies: 0,
            PlayerStrikerate: [
                {
                    name: "David Warner",
                    avgstrikerate: 225
                },
                {
                    name: "Rishabh Pant",
                    avgstrikerate: 195
                },
                {
                    name: "Prithvi Shaw",
                    avgstrikerate: 245
                },
                {
                    name: "Yash Dhull",
                    avgstrikerate: 185
                },
                {
                    name: "Jake Fraser-McGurk",
                    avgstrikerate: 220
                },
                {
                    name: "Shai Hope",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Kings XII Punjab",
            Matchvenue: "Delhi cricket stadium",
            Teamcaptian: "KL Rahul",

            tropies: 4,
            PlayerStrikerate: [
                {
                    name: "Shikhar Dhawan",
                    avgstrikerate: 225
                },
                {
                    name: "Jitesh Sharma",
                    avgstrikerate: 165
                },
                {
                    name: "Jonny Bairstow",
                    avgstrikerate: 231
                },
                {
                    name: "Prabhsimran Singh",
                    avgstrikerate: 185
                },
                {
                    name: "Liam Livingstone",
                    avgstrikerate: 261
                },
                {
                    name: "Harpreet Bhatia.",
                    avgstrikerate: 185
                }
            ]
        },
        {
            TeamName: "Sunrisers Hyderabad",
            Matchvenue: "Delhi cricket stadium",
            Teamcaptian: "Pat Cummins (C)",

            tropies: 0,
            PlayerStrikerate: [
                {
                    name: "Abhishek Sharma",
                    avgstrikerate: 225
                },
                {
                    name: "Travis Head",
                    avgstrikerate: 165
                },
                {
                    name: "Aiden Markram",
                    avgstrikerate: 265
                },
                {
                    name: "Heinrich Klaasen",
                    avgstrikerate: 221
                },
                {
                    name: "Nitish Kumar Reddy",
                    avgstrikerate: 185
                },
                {
                    name: "Abdul Samad",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Royal challenge Bangolre",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Rohit sharama",

            tropies: 5,
            PlayerStrikerate: [
                {
                    name: " Philip Salt(w)",
                    avgstrikerate: 225
                },
                {
                    name: "Sunil Narine",
                    avgstrikerate: 165
                },
                {
                    name: "Venkatesh Iyer",
                    avgstrikerate: 220
                },
                {
                    name: "Shreyas Iyer(c)",
                    avgstrikerate: 185
                },
                {
                    name: "Angkrish Raghuvanshi",
                    avgstrikerate: 201
                },
                {
                    name: "Andre Russell",
                    avgstrikerate: 185
                },
            ]
        },
        {
            TeamName: "Gujarat Titans",
            Matchvenue: "Hyderabad cricket stadium",
            Teamcaptian: "Shubman Gill(c)",

            tropies: 4,
            PlayerStrikerate: [
                {
                    name: "Shubman Gill ",
                    avgstrikerate: 225
                },
                {
                    name: "David Miller",
                    avgstrikerate: 165
                },
                {
                    name: "Matthew Wade",
                    avgstrikerate: 185
                },
                {
                    name: "Wriddhiman Saha",
                    avgstrikerate: 221
                },
                {
                    name: "BR Sharath",
                    avgstrikerate: 211
                },
                {
                    name: "Kane Williamson",
                    avgstrikerate: 185
                },
            ]
        },


    ]


    // Reduce method -- Total count of tropies of all teams.

    const countropies = (iplMatchesdetails) => {
        return iplMatchesdetails.reduce((a, b) => a + b.tropies, 0)
    }
    // countropies(iplMatchesdetails)


    // Filter method --  filtering the data based same venue cricket match ground

    const sameHomeGround = (iplMatchesdetails) => {
        return iplMatchesdetails.filter(homeGround => homeGround.Matchvenue == "Hyderabad cricket stadium")
    }
    sameHomeGround(iplMatchesdetails)


    // Filter method -- filtering the winning count greater than 3


    const winningcount = (iplMatchesdetails) => {
        return iplMatchesdetails.filter(winningtropies => winningtropies.tropies > 3)
    }
    winningcount(iplMatchesdetails)



    const a = iplMatchesdetails.map((value) => {
        return (value.PlayerStrikerate)
    })




    return (
        <>
            <h1>{`Total count of tropies won by all Ipl teams : ${countropies(iplMatchesdetails)}`}</h1>


            {
                sameHomeGround(iplMatchesdetails).map((name) => {
                    const { TeamName, Matchvenue, Teamcaptian } = name //destrucutring...
                    return (
                        <>
                            <table border="1">
                                <tr>
                                    <td>{TeamName}</td>
                                    <td>{Matchvenue}</td>
                                    <td>{Teamcaptian}</td>

                                </tr>


                            </table>

                        </>
                    )
                })

            }
            {
                <>

                    <h1>{`Teams list won more than 3 tropies in IPL matches...`}</h1>

                    {
                        winningcount(iplMatchesdetails).map((name) => {
                            const { TeamName } = name
                            return (
                                <>
                                    <table>
                                        <h3><tr><td>{TeamName}</td></tr></h3>
                                    </table>


                                </>



                            )

                        })
                    }
                </>
            }
            <h1>Players names strike rate greater than 200</h1>
            {

                iplMatchesdetails.map((value) => {
                    return (
                        <>

                            {value.PlayerStrikerate.filter((ele) => {

                                return ele.avgstrikerate > 200
                            }).map((playersnames) => {
                                return (
                                    
                                    <p>{playersnames.name}</p>
                                        
                                
                                )
                            })
                            }
                        </>
                    )
                })

            }


        </>

    )




}

export default IplMatches