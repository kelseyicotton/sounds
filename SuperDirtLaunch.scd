(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels
    //~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*");
	~dirt.loadSoundFiles("C:/Users/kelse/AppData/Local/SuperCollider/downloaded-quarks/Dirt-Samples/*");
	// specify sample folder to load
	~dirt.loadSoundFiles("/kelse/03_Repositories/sounds/*")
    s.sync; // wait for supercollider to finish booting up
    ~dirt.start(57120, 0 ! 12); // start superdirt, listening on port 57120, create twelve orbits each sending audio to channel 0
};
);
