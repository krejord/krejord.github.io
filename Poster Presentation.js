const posterPresentations = [
  {
    year: "2019",
    title: "Optimizing chromatin fragmentation for mammalian ChIP-exo",
    author: "<strong>Krebs, J,</strong> Lai, WKM, Pugh F.",
    location:
      "2019 PSU MCIBS and Pathobiology retreat. Boalsburg, PA. Aug. 20, 2019. 2019 CEGR retreat. Boalsburg, PA. Oct. 12, 2019.",
  },

  {
    year: "2018",
    title: "“Application of ChIP-exo in human health”",
    author: " <strong>Krebs, J,</strong> Lai, WKM, Pugh F.",
    location: "2018 CEGR retreat. Boalsburg, PA. Oct. 20, 2018.",
  },
  {
    year: "2016",
    title: "“The Systematic Knock-Out of Mediator Complex Subunits”.",
    author:
      "<strong>Krebs J,</strong> Kieffer-Kwon P, Tripathi S, Jung S, Kieffer-kwon KR, Khattabi L, Casellas R.",
    location:
      " 2016 NIAMS Poster Day. Bethesda, MD. April 29, 2016; 2016 Post-bac Poster Day. Bethesda, MD. April 20, 2016.",
  },

  {
    year: "2015",
    title: "“The Systematic Knock-Out of Mediator Complex Subunits”.",
    author: "<strong>Krebs, J,</strong> Kieffer-Kwon P, Casellas R.",
    location: " 2015 Post-bac Poster Day. Bethesda, MD. April 30, 2015.",
  },
  {
    year: "2014",
    title: "“High-throughput production of custom designed nucleases”.",
    author: "<strong>Krebs J,</strong> Kieffer-Kwon P, Nelson S, Casellas R.",
    location: "2014 NIH Post-bac Poster Day. Bethesda, MD. May 1, 2014.",
  },

  {
    year: "2013",
    title:
      "“Average-Nucleotide Identity Bi-Directional Best Hit (ANIBBH): Novel Genomic-Based Method to Differentiate Bacterial Species”.",
    author: "<strong>Krebs J,</strong> Gale A*, Sontag T, Keyser V, Newman J. ",
    location: "2013 ASM General Meeting. Denver, CO. May 18-21, 2013.",
  },
  {
    year: "" /*2013*/,
    title: "“Purification of Flexirubin Pigments from Chryseobacterium”.",
    author: "<strong>Krebs J,</strong> Gale A, Newman J.",
    location: "2013 ASM General Meeting. Denver, CO. May 18-21, 2013.",
  },
  {
    year: "" /*2013*/,
    title: "“Purification of Flexirubin Pigments from Chryseobacterium”",
    author: "<strong>Krebs J,</strong> Gale A, Newman J.",
    location:
      "16th Annual Environmental Chemistry and Microbiology Student Symposium. Penn State University, State College, PA. March 15-16, 2013.",
  },
  {
    year: "" /*2013*/,
    title:
      "“Average-Nucleotide Identity Bi-Directional Best Hit (ANIBBH): Novel Genomic-Based Method to Differentiate Bacterial Species”.",
    author: "<strong>Krebs J,</strong> Gale A*, Sontag T, Keyser V, Newman J.",
    location:
      "Poster presented at 16th Annual Environmental Chemistry and Microbiology Student Symposium. Penn State University, State College, PA. March 15-16, 2013.",
  },
  {
    year: "" /*2013*/,
    title:
      " “Average-Nucleotide Identity Bi-Directional Best Hit (ANIBBH): Novel Genomic-Based Method to Differentiate Bacterial Species”.",
    author: "<strong>Krebs J,</strong> Gale A*, Sontag T, Keyser V, Newman J. ",
    location:
      "2013 PAS Annual Meeting. University of Pittsburgh-Bradford, Bradford, PA. April 5-7, 2013.",
  },

  {
    year: "2012",
    title:
      "“Purification and Molecular Structure Determination of Flexirubins from Chryseobacteria”",
    author: "  <strong>Krebs J,</strong> Sampsell D, McDonald C, Newman J. ",
    location:
      "2012 Undergraduate Research Symposium in the Chemical and Biological Sciences, UMBC. University of Maryland Baltimore County, Baltimore, MD. Oct. 22, 2012.",
  },
  {
    year: "" /*2012*/,
    title: " “Genome Editing via TALEN zinc finger nucleases”.",
    author: "<strong> Krebs JE, </strong>Qian J, Kieffer-Kwon K, Casellas R.",
    location:
      "2012 Summer Research Program Poster Day, NIH. Bethesda, MD. Aug. 8, 2012.",
  },

  {
    year: "" /*2012*/,
    title:
      "“Astrobiological Significance of Exosporium-forming spores for UV resistance”.",
    author:
      "<strong> Krebs JE, </strong> Schrader M, Vaishampayan P, Rabbow E, Rettberg P, Venkateswaran K.",
    location:
      " 2012 Astrobiology Science Conference (ABSCISON). Georgia Institute of Technology, Atlanta, GA. April 15-20, 2012.",
  },

  {
    year: "2011",
    title:
      "“Role of Extraneous layer of Bacillus horneckiae spores in Enhanced UV Resistance”. ",
    author: "<strong> Krebs JE, </strong> Vaishampayan P, Venkateswaran K. ",
    location:
      "2011 Undergraduate Research Symposium in the Chemical and Biological Sciences, UMBC. University of Maryland, Baltimore County, Baltimore, MD. Oct. 22, 2011.",
  },
  {
    year: "" /*2011*/,
    title:
      "“Characterization of Novel Bacterial Species Identified by Undergraduate Students in a General Microbiology Course”. ",
    author:
      "Collins K, <strong>Krebs J,</strong>  Kirk K, Smith K, Duncan T, Failor KC, Newman J.",
    location:
      "2011 ASM Annual Meeting. New Orleans Convention Center, New Orleans, LA. May 21-24, 2011.",
  },

  {
    year: "2010",

    title:
      "“Molecular and Phenotypic Characteristics of a Novel Species and Related Type Strains Suggest a Reorganization within the Genus Chryseobacterium”. ",
    author:
      "<strong> Krebs JE, </strong> Failor KC, Marcinko TM, and Newman JD.",
    location:
      "2010 ABASM Meeting. Lock Haven University, Clearfield Campus, Clearfield, PA. Nov. 5-6, 2010",
  },
];

//Poster Printout
function templatePoster(poster) {
  return `
    <div class="row poster publications_content" id="poster_content">
    <div class="col-xl-1">
      <h5>${poster.year}</h5>
    </div>
    <div class="col-xl-3"></div>
    <div class="col-xl-8">
      <h6>
        ${poster.title}
      </h6>
      <p class="author">${poster.author}</p>
      <p>
        ${poster.location}
      </p>
    </div>
  </div>
    `;
}
document.getElementById("poster").innerHTML = `
<div class="myContainer">
<div class="row subtitle">
  <h5>Poster Presentations</h5>
</div>
${posterPresentations.map(templatePoster).join("")}
</div>
`;
