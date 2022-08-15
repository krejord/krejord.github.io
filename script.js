"use strict";
// Homepage Research/ Publicaiton section Data
const researchData = [
  {
    number: "01",
    title:
      "Genome-wide map of nucleosomes and sub-nucleosomes in human cells with a novel nuclease-based chromatin fragmentation strategy",
    content:
      "In each cell, 2 meters of DNA is wrapped into about a 10 μM diameter space called the nucleus. DNA is coiled around histone octamers, collectively called a nucleosome. The position of nucleosomes determines what genes are accessible to nuclear proteins. We have devised a novel method in which a nuclease chews accessible DNA around these structures to determine their location in higher-resolution and to greater completion than previously published. A map of nucleosomes and sub-nucleosome particles genome-wide will provide a chromatin landscape for then surveying the location of transcription factors and otherchromatin complexes via nuclease-ChIP-exo (below).",
  },
  {
    number: "02",
    title:
      "A streamlined ChIP-exo 6.1 assay measures same-molecule positional relationship between transcription factors and  nucleosomes in vivo",
    content:
      "Transcription factors (ssTFs) bind specific DNA sequences in promoter and enhancer regions in the context of an organized nucleosome architecture. There they recruit cofactors that regulate chromatin accessibility and transcription complex assembly. ChIP-exo is a high-resolution genome-wide assay that measures protein-DNA interactions with single-bp precision. Here we couple the precision of ChIP-exo with a nuclease chromatin fragmentation strategy that cleaves and marks rotationally-exposed DNA on nucleosomal surfaces. This maps the positional orientation of TFs with an adjacent nucleosome surface on the same DNA molecule in human cells. Additional modifications to the ChIP-exo assay present here (version 6.1) greatly simplify library construction over prior versions and provides a facile, high-precision means to map genomic TF binding sites.",
  },
  {
    number: "03",
    title: "Application of nuclease-ChIP-exo to mammalian tissues",
    content:
      "Applying nuclease-ChIP-exo (6.1) to any clinical samples depends upon the ability to (1) grind different sized tissues, (2) remove embedding media if present, and (3) isolate nuclei. A method to grind <200 mg tissues while frozen was devised to minimize sample loss utilizing items available at any home improvement store. Removal of pathology-applied media is being studied as well as how to isolate nuclei from various organs. Quantifiable, purified nuclei will be an appropriate input for ChIP-exo to provide epigenomic data for clinical samples.",
  },
];

const peerReviewPublications = [
  {
    year: "2019",
    author:
      "Khattabi LE, Zhao H, Kalchschmidt J, Young N, Jung S, Blerkom PV, Kieffer-Kwon P, Kieffer-Kwon K, Park S, Wang X, <strong>Krebs J,</strong> Tripathi S, Sakabe N, Sobreira DR, Haung S, Rao SSP, Pruett N, Chauss D, Sadler E, Lopez A, Nobrega MA, Aiden EL, Asturias FJ, Casellas R.",
    title:
      "A Pliable Mediator Acts as a Functional Rather than an Architectural Bridge between Promoters and Enhancers.",
    italic: "Cell.",
    number: " 178(5):1145-1158.",
  },

  {
    year: "2016",
    author:
      "Juan AH, Wang S., Ko KD, Zare H, Tsai PF, Feng X, Vivanco KO, Ascoli AM, Gutierrez-Cruz G, <strong>Krebs J,</strong> Sidoli S, Knight AL, Pederson RA, Garcia BA, Casellas R, Zou J, Sartorelli V.",
    title:
      "Roles of H3K27me2 and H3K27me3 Examined during Fate Specification of Embryonic Stem Cells. ",
    italic: "Cell Rep.",
    number: " 17(5): 1369-1382.",
  },
  {
    year: "2014",
    author:
      "<strong>Krebs JE*,</strong> Vaishampayan P*, Probst A*, Tom L, Marteinsson VT, Andersen GL, Venkateswaran K (2014).",
    title:
      "Microbial Community Structures of novel Icelandic Hot Spring Systems Revealed by PhyloChip G3 Analysis.",
    italic: "Astrobiology",
    number: "14(3): 229-240.",
  },

  {
    year: "2013",
    author:
      "Kirk KE, Hoffman JA, Smith KA, Strahan BL, Failor KC, <strong>Krebs JE,</strong> Gale AN, Do TD, Sontag TC, Batties AM, Mistiszyn K, Newman JD (2013). ",
    title:
      " Chryseobacterium angstadti sp. nov., isolated from a newt tank. Submitted to Int. J. Syst. Evol ",
    italic: "Microbiol",
    number: "63(12): 4777-4738.",
  },

  {
    /*2013*/ year: "",
    author:
      "McDonald CE, Ramsey JR, Sampsell DG, Anderson LA, <strong>Krebs JE,</strong> Smith SN (2013). ",
    title:
      " Dipyrrolidinomethylamino phosphoric triamide (DPMPA) as an Activator for samarium diioide-mediated reduction of alkyl and aryl halides.",
    italic: "Tetrahedron",
    number: "69: 2947-2953.",
  },
];

const nonPeerReviewPublications = [
  {
    year: "2014",
    author:
      "<strong>Krebs, J</strong> (2014). http://dx.doi.org/10.6084/m9.figshare.1117899.",
    title: "CRISPR Design Tool and Protocol. figshare. ",
  },
  {
    year: "2013",
    author: "<strong>Krebs JE,</strong>  (2013).",
    title:
      "“The Roller Coaster of Undergraduate Research”. CUR Quarterly. Council on Undergraduate Research. 33(3): 12.",
  },
];

// Research section print out
function templateResearchItems(research) {
  return `
  <div class="research_content">
      <div class="row">
        <h3>${research.number}</h3>
      </div>
      <div class="row re_content">
      <div class="col-xl-4">
          <h5>${research.title}
          </h5>
      </div>
      <div class="col-2"></div>
        <div class="col-xl-6">
          <p>${research.content}.</p>
      </div>
    </div>
    <div class="line"></div>
  </div>`;
}

document.getElementById("research").innerHTML = `
<div class="myContainer">
<h1>Research</h1>
${researchData.map(templateResearchItems).join("")}
</div>
`;

//The Publication Part Print Out
function templatePublicationItems(publication) {
  return `
  <div class="row publications_content">
    <div class="col-xl-1">
        <h5>${publication.year}</h5>
    </div>
    <div class="col-xl-3">
    </div>
    <div class="col-xl-8">
        <h6>${publication.title}</h6>
        <p class="author">${publication.author}</p>
        <p><span class="italic">${publication.italic} </span> ${publication.number}</p>
    </div>
  </div> 
`;
}

function templatePublicationItems2(publication) {
  return `
<div class="row publications_content">
<div class="col-xl-1">
    <h5>${publication.year}</h5>
</div>
<div class="col-xl-3">
</div>
<div class="col-xl-8">
    <h6>${publication.title}</h6>
    <p class="author">${publication.author}</p>
</div>`;
}

document.getElementById("publications").innerHTML = `       
<div class="myContainer publications">
<h1>Publications</h1>
<div class="row subtitle">
<h5>Peer Reviewed Publications</h5>
</div>
${peerReviewPublications.map(templatePublicationItems).join("")}
<div class="row subtitle">
<h5>Non-Peer Reviewed Publications</h5>
</div>
${nonPeerReviewPublications.map(templatePublicationItems2).join("")}
</div>
</div>`;

//scroll to view smoothly
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  // console.log("clicked");
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//reveal section
const allSection = document.querySelectorAll(".section");
console.log(allSection);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
