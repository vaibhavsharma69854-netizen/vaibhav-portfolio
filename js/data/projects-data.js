/**
 * projects-data.js
 * Comprehensive portfolio project data and engineering case studies for Vaibhav Sharma
 */

export const projectsData = [
  {
    id: "ugv-nav",
    title: "Vision-Based Autonomous Navigation for UGV",
    shortTitle: "Autonomous UGV Navigation",
    subtitle: "Unmanned Ground Vehicle with Computer Vision & Sensor Fusion",
    category: "ai-robotics",
    status: "In Development",
    statusType: "active", // active, completed, prototype
    featured: true,
    tagline: "Bridging real-time computer vision with low-level robotic actuators for robust outdoor terrain traversal.",
    description: "An autonomous unmanned ground vehicle concept leveraging computer vision, multi-modal sensor fusion, and intelligent navigation algorithms to perceive, map, and navigate unstructured outdoor environments without human intervention.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Arduino", "Sensors", "Robotics", "NumPy", "Serial Comm"],
    metrics: [
      { label: "Pipeline Latency", value: "< 45ms" },
      { label: "Obstacle Detection", value: "Real-Time 30 FPS" },
      { label: "Target Microcontroller", value: "Arduino Mega / Nano" },
      { label: "Vision Processing", value: "Edge Python Host" }
    ],
    github: "https://github.com/vaibhavsharma/ugv-vision-navigation",
    liveDemo: null,
    image: "assets/images/project-ugv.svg",
    caseStudy: {
      overview: "Traditional consumer rovers rely purely on ultrasonic collision bumping or manual RF control. This project engineers an intelligent Vision-Guided Unmanned Ground Vehicle (UGV) capable of lane/path tracking, dynamic obstacle segmentation, and closed-loop motor control via serialized Python-to-Arduino telemetry.",
      problem: {
        statement: "Navigating unstructured outdoor terrain poses significant challenges for low-cost robotic systems: high lighting variance, sensor noise, latency bottlenecks between high-level perception and low-level motor drivers, and unpredictable obstacles that static distance sensors fail to map accurately.",
        points: [
          "Standard distance sensors have narrow field-of-views and fail against non-orthogonal surfaces.",
          "Single-board controllers lack the raw compute to execute heavy vision pipelines onboard.",
          "High latency in control feedback loops causes vehicle overshoot and oscillation during high-speed turns."
        ]
      },
      idea: {
        concept: "A dual-tier distributed architecture separating high-level perception (Host Python running OpenCV vision filters and optical flow) from real-time low-level actuation (Arduino handling PWM motor timing, encoder feedback, and fail-safe ultrasonic braking).",
        approach: "Process live video frames through an adaptive color thresholding and contour segmentation pipeline, calculate the vehicle centroid error relative to the lane axis, and transmit concise PID steering commands over high-baud serial communication."
      },
      architecture: `
+-------------------------------------------------------------+
|                     PERCEPTION TIER                         |
|  [ Wide-Angle Camera ] ---> [ Frame Preprocessing (HSV) ]  |
|                                     |                       |
|  [ Dynamic Thresholding ] <---------+                       |
|           |                                                 |
|  [ Contour Extraction & Centroid Heading Calculation ]      |
+------------------------------+------------------------------+
                               | High-Speed Serial (115200)
                               v
+-------------------------------------------------------------+
|                     ACTUATION TIER                          |
|  [ Arduino Controller ] <--- [ Ultrasonic Failsafe Grid ]   |
|           |                                                 |
|  [ PID Steering & Speed Calculation ]                        |
|           |                                                 |
|  [ Dual H-Bridge Motor Driver (L298N) ]                      |
|           |                                                 |
|  [ 4x High-Torque DC Geared Motors & Encoders ]             |
+-------------------------------------------------------------+
      `,
      techStack: {
        software: ["Python 3.11+", "OpenCV (cv2)", "NumPy", "PySerial", "Matplotlib"],
        hardware: ["Arduino Microcontroller", "L298N Motor Driver", "4x High-Torque DC Motors", "HC-SR04 Ultrasonic Sensor Grid", "Wide FOV HD USB Camera", "7.4V Li-Po Power Distribution"]
      },
      developmentSteps: [
        {
          step: "01. Hardware Assembly & Chassis Calibration",
          detail: "Fabricated a 4WD differential drive chassis with vibration isolation mounts for the primary imaging module and regulated dual-rail power isolation."
        },
        {
          step: "02. Vision Pipeline Prototyping",
          detail: "Implemented Gaussian blurring, Otsu thresholding, Canny edge detection, and perspective transform (Bird's Eye View) to extract navigational vectors."
        },
        {
          step: "03. Bi-Directional Serial Protocol",
          detail: "Built a fault-tolerant binary/delimited serial protocol with packet checksums to prevent corrupted steering commands from reaching motor controllers."
        },
        {
          step: "04. Closed-Loop PID Tuning",
          detail: "Tuned Proportional-Integral-Derivative parameters to eliminate steering oscillations when tracking curved paths."
        }
      ],
      challenges: [
        {
          issue: "Lighting Glare & Dynamic Shadows Outdoors",
          resolution: "Switched from standard RGB color masking to the HSV color space with adaptive illumination equalization (CLAHE), significantly increasing robustness against direct sunlight."
        },
        {
          issue: "Serial Buffer Lag & Frame Queuing Delays",
          resolution: "Implemented a multi-threaded camera capture buffer in Python to ensure the vision pipeline always processes the latest frame, dropping stale queue frames."
        }
      ],
      results: [
        "Consistent tracking of designated paths at speeds up to 1.2 m/s.",
        "Emergency ultrasonic override halts vehicle in under 120ms if obstacle emerges inside 20cm blindzone.",
        "Achieved stable 30+ FPS video processing on standard edge hardware."
      ],
      learnings: [
        "Real-time robotics requires relentless optimization of latency between perception algorithms and mechanical hardware.",
        "Modularizing code into distinct perception, planning, and control layers allows seamless future migration to ROS2 or edge neural accelerators."
      ],
      futureRoadmap: [
        "Integrate lightweight YOLOv8n object detection for dynamic pedestrian and obstacle classification.",
        "Implement visual odometry and SLAM (Simultaneous Localization and Mapping).",
        "Add GPS/Compass IMU sensor fusion for long-range autonomous waypoint navigation."
      ]
    }
  },
  {
    id: "ecosort-rover",
    title: "EcoSort Rover",
    shortTitle: "EcoSort Waste Sorting Rover",
    subtitle: "Automated Robotic Waste Detection & Segregation Prototype",
    category: "robotics",
    status: "Working Prototype",
    statusType: "prototype",
    featured: true,
    tagline: "Exploring intelligent automated waste classification and segregation at the edge.",
    description: "A robotics prototype designed to explore automated waste detection and physical sorting using sensor arrays, embedded microcontrollers, and intelligent servo-driven distribution mechanisms.",
    technologies: ["Arduino", "Sensors", "Robotics", "Embedded Systems", "Servo Motors", "C++"],
    metrics: [
      { label: "Sorting Cycle", value: "< 2.5s" },
      { label: "Sensor Array", value: "Inductive & Optical" },
      { label: "Actuation", value: "Multi-Axis Servo Gate" },
      { label: "Power Efficiency", value: "Low-Power 5V/9V" }
    ],
    github: "https://github.com/vaibhavsharma/ecosort-rover",
    liveDemo: null,
    image: "assets/images/project-ecosort.svg",
    caseStudy: {
      overview: "Manual waste sorting in institutions and municipal areas is hazardous, slow, and prone to contamination. EcoSort Rover was prototyped as a proof-of-concept autonomous collector and sorting station that identifies material properties (metallic vs. non-metallic, dry vs. wet) and segregates them mechanically into separate containment chambers.",
      problem: {
        statement: "Over 60% of recyclable material is discarded into general landfills due to improper segregation at source. Human manual sorting is unhygienic and inefficient.",
        points: [
          "Cross-contamination occurs when wet and dry or metallic recyclables are mixed.",
          "Sorting post-disposal requires heavy industrial machinery that cannot be deployed locally in schools, offices, or labs."
        ]
      },
      idea: {
        concept: "Combine an inductive proximity sensor, moisture/capacitive sensor, and ultrasonic presence detector over a tilting chute driven by micro-servos to categorize waste items into segregated bins automatically upon deposit.",
        approach: "Step 1: Detect object entry via ultrasonic range trigger. Step 2: Sample sensor array during a 500ms stabilization window. Step 3: Actuate servo flapper to route the item to Bin A (Metallic/Recyclable) or Bin B (General/Organic)."
      },
      architecture: `
+---------------------------------------------------------------+
|                       DEPOSIT HOPPER                          |
|                  [ Ultrasonic Wake Sensor ]                   |
+-------------------------------+-------------------------------+
                                | (Object Present)
                                v
+---------------------------------------------------------------+
|                      SENSOR FUSION STAGE                      |
|   [ Inductive Metallic Sensor ] + [ Moisture/Optical Sensor ] |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                   ARDUINO CONTROL CORE                        |
|  - Debounces sensor readings                                  |
|  - Classifies: Metallic (1), Organic/Wet (2), Dry/General (3)|
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                    MECHANICAL ACTUATION                       |
|   [ Micro Servo Motor Chute Angle ] ---> [ Target Bin ]       |
+---------------------------------------------------------------+
      `,
      techStack: {
        software: ["Arduino IDE (C/C++)", "State Machine Logic", "Sensor Debounce Algorithms"],
        hardware: ["Arduino Uno R3", "Inductive Proximity Sensor (LJ12A3)", "HC-SR04 Ultrasonic Sensor", "SG90 Micro Servos", "3D-Printed / Acrylic Chute", "Dual Rail Power Supply"]
      },
      developmentSteps: [
        {
          step: "01. Mechanical Chute Design",
          detail: "Fabricated an angled gravity-fed sorting ramp with low-friction surface and integrated sensor detection beds."
        },
        {
          step: "02. Sensor Calibration & Logic State Machine",
          detail: "Wrote a non-blocking asynchronous state machine in C++ to prevent delay() functions from locking sensor read cycles."
        },
        {
          step: "03. Actuator Alignment",
          detail: "Programmed precise micro-step servo sweep angles with gradual acceleration curves to prevent object jams."
        }
      ],
      challenges: [
        {
          issue: "False Triggers from Dropped Light Objects",
          resolution: "Implemented a multi-sample averaging filter and temporal verification window (object must remain stable for 3 consecutive reads before triggering chute)."
        },
        {
          issue: "Servo Power Spikes Resets Microcontroller",
          resolution: "Separated servo motor VCC line to an external regulated power rail with electrolytic decoupling capacitors and shared common ground."
        }
      ],
      results: [
        "Achieved 92% correct classification for metallic vs. non-metallic test samples.",
        "Average sorting cycle completed in 2.1 seconds per object.",
        "Demonstrated reliable continuous sorting across 50+ test iterations."
      ],
      learnings: [
        "Power line decoupling and common grounding are critical when mixing inductive coils, servos, and microcontrollers.",
        "Mechanical gravity alignment is just as important as the code running the actuators."
      ],
      futureRoadmap: [
        "Incorporate a camera module with edge TinyML for visual material and plastic polymer classification.",
        "Add solar harvesting and battery level telemetry.",
        "Add GSM/LoRa module to notify maintenance when collection bins reach 80% capacity."
      ]
    }
  },
  {
    id: "image-to-pencil-sketch",
    title: "Image to Pencil Sketch",
    shortTitle: "Image to Pencil Sketch Filter",
    subtitle: "Mathematical Computer Vision & Digital Art Transformation",
    category: "ai-vision",
    status: "Completed",
    statusType: "completed",
    featured: false,
    tagline: "Exploring spatial frequency manipulation and mathematical image filters with OpenCV.",
    description: "A computer vision tool built in Python using OpenCV that transforms raw photographic images into realistic pencil sketch artworks through grayscale conversion, negative inversion, Gaussian spatial filtering, and mathematical color dodging.",
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing", "Matplotlib"],
    metrics: [
      { label: "Execution Time", value: "< 20ms / 4K Image" },
      { label: "Algorithm", value: "Color Dodge & Blur" },
      { label: "Memory Footprint", value: "< 50MB RAM" },
      { label: "Format Support", value: "JPG, PNG, WEBP, BMP" }
    ],
    github: "https://github.com/vaibhavsharma/image-to-pencil-sketch",
    liveDemo: null,
    image: "assets/images/project-sketch.svg",
    caseStudy: {
      overview: "Digital sketching filters often produce artificial or washed-out results when using generic edge detectors. This project dives into the mathematical mechanics of classical computer vision to implement an authentic graphite pencil sketch transformation pipeline using OpenCV and NumPy.",
      problem: {
        statement: "Simple edge detection algorithms (such as Sobel or raw Canny) produce harsh binary lines without continuous pencil stroke shading, tonal gradient depth, or fine artistic texture.",
        points: [
          "Binary edge filters lose shadow mid-tones and surface texture.",
          "Naive division operations during image blending cause division-by-zero artifacts and blown-out highlights."
        ]
      },
      idea: {
        concept: "Utilize the classic Color Dodge blending algorithm on an inverted Gaussian-blurred image to highlight luminance transitions and mimic the physics of graphite on paper.",
        approach: "Step 1: Grayscale conversion. Step 2: Bitwise inversion (255 - grayscale). Step 3: Heavy Gaussian Blur with optimized kernel size to extract broad tonal structures. Step 4: Mathematical Color Dodge blend `(Grayscale * 256) / (255 - Blurred)`."
      },
      architecture: `
+-------------------------------------------------------------+
|                      INPUT COLOR IMAGE                      |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|               RGB TO LUMINANCE GRAYSCALE                    |
|                cv2.cvtColor(BGR2GRAY)                       |
+------------------------------+------------------------------+
                               |
                               +-----------------------------+
                               |                             |
                               v                             v
+------------------------------------+  +--------------------+
|          BITWISE INVERT            |  |  PRESERVED         |
|         (255 - Grayscale)          |  |  GRAYSCALE         |
+------------------+-----------------+  |  STREAM            |
                   |                    +---------+----------+
                   v                              |
+------------------------------------+            |
|       DYNAMIC GAUSSIAN BLUR        |            |
|       (Kernel: (21, 21), sigma)    |            |
+------------------+-----------------+            |
                   |                              |
                   +--------------+---------------+
                                  |
                                  v
+-------------------------------------------------------------+
|               MATHEMATICAL COLOR DODGE BLEND                |
|              Sketch = (Gray * 256) / (255 - Blur)           |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                FINAL PENCIL SKETCH OUTPUT                   |
+-------------------------------------------------------------+
      `,
      techStack: {
        software: ["Python 3.10+", "OpenCV (cv2)", "NumPy vector operations", "Tkinter / CLI Interface"],
        hardware: ["Standard CPU"]
      },
      developmentSteps: [
        {
          step: "01. Formula Mathematical Proof & Vectorization",
          detail: "Wrote high-speed vectorized NumPy operations avoiding nested loops, reducing processing time from seconds to milliseconds."
        },
        {
          step: "02. Kernel Parameter Tuning",
          detail: "Built an interactive GUI slider with OpenCV Trackbars to dynamically experiment with Gaussian kernel radius and contrast scaling."
        },
        {
          step: "03. Batch Processing Pipeline",
          detail: "Added support for single-image export, folder batch conversion, and live webcam video sketching stream."
        }
      ],
      challenges: [
        {
          issue: "Division by Zero in Color Dodge Equation",
          resolution: "Applied bitwise boundary clipping `np.minimum` and clamped values where `(255 - Blur) == 0` to 255 to eliminate white noise artifacts."
        },
        {
          issue: "Loss of Fine Details with Extreme Blur Radii",
          resolution: "Formulated an adaptive kernel size calculator based on source image resolution rather than a hardcoded pixel constant."
        }
      ],
      results: [
        "Processes full HD (1080p) frames in under 12ms, enabling 60 FPS real-time webcam pencil sketching.",
        "Produces rich, organic graphite textures with smooth mid-tone gradations."
      ],
      learnings: [
        "Deepened understanding of matrix-based digital image representation, color spaces, and frequency domain filtering.",
        "Appreciated the performance advantages of vectorized C-backed NumPy kernels over iterative loops."
      ],
      futureRoadmap: [
        "Add stylized paper texture blending (canvas, parchment, charcoal paper).",
        "Implement colored pencil sketch mode by applying hue and saturation re-injection."
      ]
    }
  },
  {
    id: "smart-trash-can",
    title: "Auto-Aiming Smart Trash Can",
    shortTitle: "Auto-Aiming Smart Waste Bin",
    subtitle: "Target-Tracking Autonomous Waste Disposal Prototype",
    category: "robotics",
    status: "Working Prototype",
    statusType: "prototype",
    featured: false,
    tagline: "Combining proximity sensing with motorized swivel actuation for hands-free waste disposal.",
    description: "An automated robotics prototype engineered to detect human proximity, orient toward approaching targets, and open its lid autonomously for touch-free and hygienic waste management.",
    technologies: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Embedded C++", "Hardware Design"],
    metrics: [
      { label: "Response Time", value: "< 200ms" },
      { label: "Swivel Range", value: "180° Panoramic" },
      { label: "Lid Actuation", value: "PWM Smooth Ramp" },
      { label: "Power Source", value: "Rechargeable 9V DC" }
    ],
    github: "https://github.com/vaibhavsharma/auto-aiming-trash-can",
    liveDemo: null,
    image: "assets/images/project-trashcan.svg",
    caseStudy: {
      overview: "Standard contactless trash cans only open when hands hover directly inches above the lid. The Auto-Aiming Smart Trash Can takes touchless hygiene further by detecting user approach angles and swiveling the aperture toward the user before opening smoothly.",
      problem: {
        statement: "In clinical, laboratory, or shared environments, touching waste bin surfaces spreads contaminants. Furthermore, fixed-direction bins frequently result in missed tosses and discarded litter around the bin area.",
        points: [
          "Users must stand in a specific orientation to trigger basic infrared bins.",
          "Lids slamming shut cause mechanical wear and acoustic disruption."
        ]
      },
      idea: {
        concept: "Mount a pair of differential ultrasonic distance sensors on a motorized rotating turret to track lateral motion, compute relative angular offset, and drive a high-torque servo to aim the hopper aperture before opening.",
        approach: "Continuous polling of dual HC-SR04 sensors computes target delta (Left vs Right). When a threshold delta is detected inside the 1-meter interaction sphere, the base servo slews toward the source and triggers the lid servo sequence."
      },
      architecture: `
+-------------------------------------------------------------+
|                  DUAL SENSOR SCANNING EYE                   |
|   [ Left HC-SR04 Sensor ]       [ Right HC-SR04 Sensor ]    |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                ARDUINO POSITION COMPARATOR                  |
|  - Calculates target distance & angular error delta         |
|  - Filters out background static echoes                     |
+------------------------------+------------------------------+
                               |
                               +-----------------------------+
                               |                             |
                               v                             v
+------------------------------------+  +--------------------+
|       BASE TURRET SERVO            |  |  LID OPENING SERVO |
|     (0° to 180° Azimuth Angle)     |  | (0° to 90° Motion) |
+------------------------------------+  +--------------------+
      `,
      techStack: {
        software: ["Arduino C++", "Timer Interrupts", "Exponential Smoothing Filters"],
        hardware: ["Arduino Nano", "2x HC-SR04 Ultrasonic Distance Sensors", "MG996R High-Torque Metal Gear Servo", "SG90 Micro Servo", "Custom Swivel Base Platform"]
      },
      developmentSteps: [
        {
          step: "01. Dual-Sensor Triangulation Logic",
          detail: "Programmed distance comparison routines to determine whether an approaching user is to the left, right, or center of the bin."
        },
        {
          step: "02. Smooth Servo Interpolation",
          detail: "Implemented sinusoidal speed curve easing to prevent sudden jerky motions and gear backlash on the rotating platform."
        },
        {
          step: "03. Auto-Timeout & Home Return Sequence",
          detail: "Added an automated 4-second dwell timer that closes the lid and smoothly returns the swivel base to its default 90° center posture."
        }
      ],
      challenges: [
        {
          issue: "Ultrasonic Cross-Talk and Echo Interference",
          resolution: "Interleaved the trigger pulses of the two ultrasonic sensors by 25ms to prevent echo reflections from sensor A polluting the echo pin of sensor B."
        },
        {
          issue: "Mechanical Turret Wobble Under Load",
          resolution: "Re-engineered the base using a thrust bearing turntable assembly to isolate axial loads from the servo output spline."
        }
      ],
      results: [
        "Reliable detection and orientation within a 120° frontal cone up to 80cm distance.",
        "Zero gear stripping over 200+ test actuations using high-torque metal gear servos."
      ],
      learnings: [
        "Mastered multi-sensor ultrasonic timing orchestration and non-blocking pulse measurement.",
        "Gained practical experience designing mechanical load-bearing assemblies for robotic fixtures."
      ],
      futureRoadmap: [
        "Replace dual ultrasonic sensors with a miniature Time-of-Flight (ToF) LiDAR array for millimeter spatial accuracy.",
        "Add a fill-level internal sensor that alerts when the bin is full."
      ]
    }
  },
  {
    id: "smart-door-alarm",
    title: "Smart Door Alarm",
    shortTitle: "Proximity-Based Smart Door Alarm",
    subtitle: "Embedded Security & Intrusion Detection Prototype",
    category: "iot-embedded",
    status: "Completed Prototype",
    statusType: "completed",
    featured: false,
    tagline: "Ultrasonic boundary monitoring with multi-tier alert escalation and visual telemetry.",
    description: "A proximity-based security and access monitoring prototype utilizing an ultrasonic sensing array, Arduino microcontroller, audio-visual feedback indicators, and intelligent distance threshold zoning.",
    technologies: ["Arduino", "Ultrasonic Sensor", "Embedded Systems", "Hardware", "C++"],
    metrics: [
      { label: "Detection Range", value: "2cm to 300cm" },
      { label: "Alert Latency", value: "< 50ms" },
      { label: "Zone Escalation", value: "3-Tier (Safe/Warn/Alarm)" },
      { label: "Quiescent Draw", value: "< 15mA" }
    ],
    github: "https://github.com/vaibhavsharma/smart-door-alarm",
    liveDemo: null,
    image: "assets/images/project-dooralarm.svg",
    caseStudy: {
      overview: "Traditional magnetic door contacts only alert after a door is already physically breached. The Smart Door Alarm prototype explores active perimeter proximity awareness, detecting human presence and approach speed outside the doorway to trigger early warning cues.",
      problem: {
        statement: "Static mechanical reed switches provide zero contextual proximity data: they can't differentiate between someone standing outside a door, approaching rapidly, or an accidental door ajar state.",
        points: [
          "No pre-breach warning or presence indication.",
          "Hardwired physical switches are prone to mechanical alignment drift over time."
        ]
      },
      idea: {
        concept: "Deploy an active acoustic distance monitoring station with multi-zone threshold state machine (Zone 1: Approach Warning, Zone 2: Proximity Alert, Zone 3: Breach Alarm) with frequency-modulated buzzer alerts.",
        approach: "Calculate speed of approach by tracking rate-of-change in distance samples. Escalate alert frequency and LED visual indicators proportionally to proximity."
      },
      architecture: `
+-------------------------------------------------------------+
|                 HIGH-FREQUENCY SONAR SCAN                   |
|                  [ HC-SR04 Transducer ]                     |
+------------------------------+------------------------------+
                               | 40kHz Ultrasonic Ping
                               v
+-------------------------------------------------------------+
|                ARDUINO TIME-OF-FLIGHT LOGIC                 |
|  - Measures echo duration (microseconds)                    |
|  - Computes Distance: (Time * 0.0343) / 2 cm                |
|  - Rate of change filtering & Zone evaluation               |
+------------------------------+------------------------------+
                               |
                               +-----------------------------+
                               |                             |
                               v                             v
+------------------------------------+  +--------------------+
|        RGB LED STATUS RING         |  |   PIEZO BUZZER     |
|   (Green: Safe | Amber: Approach)  |  |   Escalating Pitch |
|   (Flashing Red: Breach Alarm)     |  |   Frequency Shift  |
+------------------------------------+  +--------------------+
      `,
      techStack: {
        software: ["Arduino C/C++", "Hardware Timers", "Tone Modulation Library"],
        hardware: ["Arduino Uno / Nano", "HC-SR04 Ultrasonic Transducer", "Active Piezo Buzzer", "Multi-color LED Indicator Matrix", "9V Battery Power Pack"]
      },
      developmentSteps: [
        {
          step: "01. Acoustic Modeling & Threshold Zoning",
          detail: "Mapped physical door clearances and configured software hysteresis bands to prevent rapid state flickering at zone boundaries."
        },
        {
          step: "02. Dynamic Sound Synthesis",
          detail: "Coded dynamic PWM tone generation that increases pitch and pulse cadence as an object closes distance."
        },
        {
          step: "03. Mute & Armed State Logic",
          detail: "Added an onboard hardware interrupt toggle switch for arming, disarming, and silent visual-only test modes."
        }
      ],
      challenges: [
        {
          issue: "Ultrasonic Outlier Spikes from Ambient Noise",
          resolution: "Implemented a moving median filter across 5 consecutive readings, effectively rejecting acoustic noise spikes."
        },
        {
          issue: "Power Consumption on Battery Operation",
          resolution: "Optimized sensor ping frequency from constant polling to adaptive 100ms intervals when in quiescent idle state."
        }
      ],
      results: [
        "Reliable detection of door approach events with under 50ms trigger latency.",
        "Zero false alarms in indoor hallway testing over a 72-hour trial."
      ],
      learnings: [
        "Gained solid grounding in Time-of-Flight sensor principles, acoustic reflection characteristics, and software debounce filters.",
        "Learned how to construct intuitive multi-modal sensory feedback for human-machine security interfaces."
      ],
      futureRoadmap: [
        "Integrate ESP8266/ESP32 Wi-Fi module for instant push notifications to mobile devices via MQTT/Telegram bot.",
        "Add passive infrared (PIR) dual-validation for 100% immune intrusion verification."
      ]
    }
  }
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai-robotics", label: "AI & Robotics" },
  { id: "ai-vision", label: "Computer Vision" },
  { id: "robotics", label: "Robotics & Hardware" },
  { id: "iot-embedded", label: "IoT & Embedded" }
];
