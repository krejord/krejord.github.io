const talks = [
  {
    year: "2021",
    author: "Krebs, J.",
    title:
      " “High-resolution mapping of transcription factor binding sites in human tissue”.",
    location: "CEGR Mega meeting. Virtual. March 3, 2021.",
  },
  {
    year: "2020",
    author: "Krebs, E.",
    title: "“Nuclease-ChIP-exo”.",
    location: " CEGR Mega meeting. Feb. 4, 2020.",
  },
  {
    year: "2019",
    author: "Krebs, J.",
    title: "“Prepping chromatin from solid organs and blood”.",
    location: " CEGR Mega meeting. April 16, 2019.",
  },
  {
    year: "2014-2016",

    author: "Krebs J, Casellas R.",
    title:
      "“Genome Editing via CRISPR: background and hands on 2016 exercise”. ",
    location:
      "“Engineering with CRISPR, TALENs, and ZFNs” FAES Class at NIH. Bethesda, MD. Feb. 6, 2015, Nov. 6,2015, Feb. 5, 2016, June 24, 2016.",
  },
  {
    year: "" /*2014-2019*/,
    author: "Krebs J, Casellas R.",
    title: " “A Bioinformatics Tool to Design Efficient sgRNAs”.",
    location:
      " “Engineering with CRISPR, TALENs, and ZFNs” FAES Class at NIH. Bethesda, MD. July 25, 2014, Feb. 3, 2015, Nov. 3 2015, Feb. 2, 2016, & June 21, 2016",
  },

  {
    year: "2013",
    author: "Krebs J, Newman J.",
    title:
      "“Perspectives on the use of GENIII Plates in Undergraduate Research”.",
    location:
      "Biolog Inc. Speaker; 2013 American Society for Microbiology (ASM) General Meeting. Denver Convention Center, Denver, CO. May 18-21, 2013.",
  },
  {
    year: "" /*2013*/,
    author: "Krebs J, Newman J.",
    title: "“Purification of Flexirubin Pigments from Chryseobacterium”.",
    location:
      "Honor’s thesis presented to Honor’s Committee in partial completion of Biology Departmental Honors. April 23, 2013.",
  },
  {
    year: "" /*2013*/,
    author: "Krebs J, Gale A, Newman J.",
    title: "“Purification of Flexirubin Pigments from Chryseobacterium”.",
    location:
      "2013 Pennsylvania Academy of Sciences (PAS) Annual Meeting. University of Pittsburgh-Bradford, Bradford, PA. April 5-7, 2013.",
  },

  {
    year: "2012",
    author: "Krebs J, Newman J.",
    title:
      "“Purification and Molecular Structure Determination of Flexirubin Pigments of Chryseobacterium”. ",
    location:
      "2012 Allegheny Branch American Society of Microbiology (ABASM) Meeting. Penn State University, State College, PA. Nov. 9-10, 2012.",
  },
  {
    year: "" /*2012*/,
    author: "Krebs J, Sontag T, Newman J.",
    title:
      " “Genome Sequencing of Lycomia zaccaria gen. nov. sp. nov., Chryseobacterium haifense, and Kaistella koreensis and Comparison to Two Closely Related Genomes”. ",
    location:
      "2012 PAS Annual Meeting. Cedar Crest College, Allentown, PA. March 30-April 1, 2012.",
  },

  {
    year: "2011",
    author: "Krebs J, Newman J.",
    title:
      " “Characterization Of a Novel Genus Within the Family Flavobacteriaceae”.",
    location:
      "2011 ABASM Meeting. Mount Aloysius College, Cresson, PA. Nov. 45, 2011.",
  },
];

//Talks Print out
function templateTalks(talks) {
  return `
      <div class="row publications_content" id="talk_content">
      <div class="col-xl-1">
        <h5>${talks.year}</h5>
      </div>
      <div class="col-xl-3"></div>
      <div class="col-xl-8">
        <h6>
          ${talks.title}
        </h6>
        <p class="author">${talks.author}</p>
        <p>
          ${talks.location}
        </p>
      </div>
    </div>
      `;
}

document.getElementById("talk").innerHTML = `
  <div class="myContainer">
    <div class="row subtitle">
      <h5>Talks</h5>
    </div>
    ${talks.map(templateTalks).join("")}
    </div>
  `;
