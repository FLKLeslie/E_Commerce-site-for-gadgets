const products = [
  {
    name: "HP EliteBook 830 G5",
    minorDetail: "ultra slim TACTILE and potable, ROM : 256GB SSD, RAM : 16GB ",
    majorDetail: [
      "Perfect design, class and performance. Intel core i7 most recent professional business laptop,1.80GHz upto 4.50GHz",
      "",
      "Graphic Card intel UHD 620 8GB total graphics TACTILE(TOUCHSCREEN)",
      "USB 3.0 Type-C",
      "Win 10 pro or Win 11 plus MS office",
    ],
    price: 220000,
    primaryImageName: "HP EliteBook 830 G5.jpg",
    secondaryImageName: "secondary HP EliteBook 830 G5.jpg",
  },
  {
    name: "HP OMEN",
    minorDetail: "Brand New sealed Gaming CPU, ROM : 1000GB SSD, RAM : 16GB",
    majorDetail: [
      "AMD Ryzen 7 4800H 2.9GHz 16 cores (4.8GHZ with turbo Boost",
      "Graphique NVIDIA GTX 1660 Ti 6GB dedicated memory",
      "Display : 15.6 inches",
      "Windows 10 PRO",
    ],
    price: 700000,
    primaryImageName: "HP OMEN.jpg",
    secondaryImageName: "secondary HP OMEN.jpg",
  },
  {
    name: "HP VICTUS",
    minorDetail: "Portable Gaming CPU, ROM : 512GB SSD, RAM : 32GB",
    majorDetail: [
      "AMD RYZEN 7 5800H 11th Gen 3.2GHz(16 CPUs)",
      "Windows 11",
      "Graphic Card : 4GB dedicated GDDR6",
      "Display : 15.6 inches",
      "Battery : 70, 070 Mwh full charge",
    ],
    price: 520000,
    primaryImageName: "HP VICTUS.jpg",
    secondaryImageName: "secondary HP VICTUS.jpg",
  },
  {
    name: "ACER NITRO",
    minorDetail: "Portable Gaming CPU, ROM : 1000GB SSD, RAM : 16BG",
    majorDetail: [
      "AMD RYZEN 7 6800H 12th Gen 3.2 GHz (16 CPUs)",
      "Windows 11",
      "Graphic Card Dedicated memory 6GB NVIDIA",
      "Display : 15.6 inches",
    ],
    price: 700000,
    primaryImageName: "ACER NITRO.jpg",
    secondaryImageName: "secondary ACER NITRO.jpg",
  },
  {
    name: "Lenovo Thinkpad E15",
    minorDetail: "Extremely Good as new Gaming Pc, ROM : 256GB SSD, RAM : 16GB",
    majorDetail: [
      "intel Core i5 2.80GHz CPU",
      "11th Generation Processor",
      "Battery Exelellent 5hrs+",
      "Type C port 15.6 inches",
    ],
    price: 340000,
    primaryImageName: "Lenovo Thinkpad E15.jpg",
    secondaryImageName: "secondary Lenovo Thinkpad E15.jpg",
  },
  {
    name: "Lenovo Thinkpad P52s",
    minorDetail:
      "Equiped with an Intel core 17 8th Generation processor, ROM : 256GB SSD, RAM : 16GB",
    majorDetail: [
      "Intel core i7 8550U 2.0GHz up to 4.0 GHz",
      "Good Battery 5hrs plus",
      "ports HDMI - wifi - bluetooth etc",
    ],
    price: 260000,
    primaryImageName: "Lenovo Thinkpad P52s.jpg",
    secondaryImageName: "secondary Lenovo Thinkpad P52s.jpg",
  },
  {
    name: "HP zbook 14",
    minorDetail:
      "Super Slim Professional Laptop with an AMD FIREPRO M4150, 1GB dedicated memory Graphics Card, ROM : 128GB SSD + 500GB HDD, RAM : 8GB",
    majorDetail: [
      "Intel core i7, 2.6GHz",
      "INTEL HD graphics 5500 128mb dedicated and 4GB total memory",
      "Tactile Screen and luminous Keyboard",
      "Excellent Battery",
    ],
    price: 200000,
    primaryImageName: "HP zbook 14.jpg",
    secondaryImageName: "secondary HP zbook 14.jpg",
  },
  {
    name: "Dell latitude 3189",
    minorDetail:
      "Super Clean Ultra sim, 6th Generation, ROM : 128GB SSD, RAM : 4GB",
    majorDetail: [
      "Touchscreen/tactile",
      "CPU : 1.10Ghz x 4(4 cores)",
      "128mb dedicated 2GB total graphics",
      "display: 12.5 inches(can easily be swiched and used in tablet mode",
    ],
    price: 110000,
    primaryImageName: "Dell latitude 3189.jpg",
    secondaryImageName: "secondary Dell latitude 3189.jpg",
  },

  {
    name: "HP elitebook follo 1040 G3",
    minorDetail:
      "Super Clean|Super Slim|Tactile, Webcam Bluetooth USB 3.0 wifi HDMI, port SIM, ROM : 256GB SSD, RAM : 8GB",
    majorDetail: [
      "6th generation",
      "Intel core i5 2.50GHz",
      "128Mb dedicated and 4GB total graphics",
      "Excellent Battery",
      "Display : 14.0 inches",
    ],
    price: 180000,
    primaryImageName: "HP elitebook follo 1040 G3.jpg",
    secondaryImageName: "secondary HP elitebook follo 1040 G3.jpg",
  },
  {
    name: "Headset Bass",
    minorDetail: "Excellent quality sound",
    majorDetail: [
      "Supports TF card and USB Flash",
      "USB 2.0 charger",
      "long range Bluetooth",
    ],
    price: 10000,
    primaryImageName: "Headset Bass.jpg",
    secondaryImageName: "secondary Headset Bass.jpg",
  },
  {
    name: "Dell latitude 5289",
    minorDetail:
      "2 - in - 1 tactile Ultra Slim with Intel core i5 2.60GHz 7th generation, ROM : 256GB SSD, RAM 8GB",
    majorDetail: [
      "UHD graphics 620",
      "128mb dedicated and 4GB total graphics",
      "Display : 13.3 inches",
      "Luminous keyboard with Excellent Battery of 6hrs Minimum",
    ],
    price: 200000,
    primaryImageName: "Dell latitude 5289.jpg",
    secondaryImageName: "secondary Dell latitude 5289.jpg",
  },
  {
    name: "Lenovo Thinkpad 11e",
    minorDetail:
      "HD graphics 612, Webcam Wifi type - C USB HDMI, ROM : 128BG SSD, RAM : 4GB",
    majorDetail: [
      "7th Generation",
      "128mb dedicated memory and 4GB total memory",
      "Battery Excellent 4 hrs plus",
    ],
    price: 90000,
    primaryImageName: "Lenovo Thinkpad 11e.jpg",
    secondaryImageName: "secondary Lenovo Thinkpad 11e.jpg",
  },
  {
    name: "Msi MS-16R5",
    minorDetail:
      "Portable Computer Core i5|10th generation (2.50GHz, 2.50GHz), ROM : 256GB SSD, RAM : 16GB",
    majorDetail: [
      "NVIDIA Geforce GTX 2650, 4GB dedicated DDR6",
      "Intel UHD Graphics Family, 128 MB dedicated",
      "Windows 11",
      "Display : 15.6 inches full HD IPS Resolution",
    ],
    price: 420000,
    primaryImageName: "Msi MS-16R5.jpg",
    secondaryImageName: "secondary Msi MS-16R5.jpg",
  },
  {
    name: "ACER NITRO 5 N20C1",
    minorDetail:
      "Potable Computer Core i5 10th Generation ROM : 256GB SSD, RAM : 16GB",
    majorDetail: [
      "Interl coreTM i5 - 10300H @ 2.50GHz, 2.50GHz",
      "NVIDIA Geforce GTX 2650, 4GB dedicated DDR6",
      "Intel UHD Graphics Family, 128 MB dedicated",
      "Windows 11",
    ],
    price: 480000,
    primaryImageName: "ACER NITRO 5 N20C1.jpg",
    secondaryImageName: "secondary ACER NITRO 5 N20C1.jpg",
  },
];
