import create from "zustand";

export const useInfoStore = create((set) => ({
  //Name
  name: "Naveen",
  setName: (name) => set((state) => ({ name: name })),
  //Stream
  stream: "Bio Science",
  setStream: (stream) => set((state) => ({ stream: stream })),
  //District
  district: "Colombo",
  setDistrict: (district) => set((state) => ({ district: district })),
  //Z-Score
  zscore: 1.1232,
  setZscore: (zscore) => set((state) => ({ zscore: zscore })),
  //Subjects
  subject01: "Biology",
  setSubject01: (subject01) => set((state) => ({ subject01: subject01 })),
  subject02: "Chemistry",
  setSubject02: (subject02) => set((state) => ({ subject02: subject02 })),
  subject03: "Physics",
  setSubject03: (subject03) => set((state) => ({ subject03: subject03 })),
  //Grades
  grade01: "A",
  setGrade01: (grade01) => set((state) => ({ grade01: grade01 })),
  grade02: "A",
  setGrade02: (grade02) => set((state) => ({ grade02: grade02 })),
  grade03: "A",
  setGrade03: (grade03) => set((state) => ({ grade03: grade03 })),
  //Score
  score01: null,
  setScore01: (score01) => set((state) => ({ score01: score01 })),
  score02: null,
  setScore02: (score02) => set((state) => ({ score02: score02 })),
  score03: null,
  setScore03: (score03) => set((state) => ({ score03: score03 })),
}));

// 01 - Medicine
export const useMedicineStore = create((set) => ({
  name: "Medicine",
  stream: "Biological Science",
  faculty: "Medicine",
  duration: 5,
  zscore: {
    AVG: "2.0000",
    Ampara: "1.8797",
    Anuradhapura: "1.9954",
    Badulla: "NQC",
    Batticaloa: "1.9118",
    Colombo: "2.0676",
    Galle: "2.0238",
    Gampaha: "1.9289",
    Hambantota: "NQC",
    Jaffna: "2.0147",
    Kalutara: "NQC",
    Kandy: "2.0031",
    Kegalle: "NQC",
    Kilinochchi: "NQC",
    Kurunegala: "NQC",
    Mannar: "NQC",
    Matale: "2.1129",
    Matara: "2.1371",
    Moneragala: "1.9195",
    Mullaitivu: "NQC",
    NuwaraEliya: "1.9691",
    Polonnaruwa: "NQC",
    Puttalam: "NQC",
    Ratnapura: "1.9329",
    Trincomalee: "1.9202",
    Vavuniya: "1.8969",
  },
  degree: "",
  recommendation: "",
  setRecommendation: (recommendation) =>
    set((state) => ({ recommendation: recommendation })),
  reason: "",
  setReason: (reason) => set((state) => ({ reason: reason })),
}));
