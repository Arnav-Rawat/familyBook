var images = [
    "Untitled.png",
    "Me.png",
    "Mother.png",
    "Father.png",
    "Breezer.png",
    "Grands Paternal.png",
    "Maternal Grandmom.png",
    "Maternal Grandfather.png",
];

var names = [
    " ",
    "Arnav Singh Rawat (Me)",
    "Kavita Rawat (Mother)",
    "Raje Singh Rawat (Father)",
    "Breezer (My Pet Puppy)",
    "Sumitra Rawat and Surat Singh Rawat (Paternal Grand Mother and Grand Father)",
    "Santosh Rana (Maternal Grand Mother)",
    "Ashok Kumar Rana (Maternal Grand Father)",
];

var i = 0;

function family() {
    if (i==8) {
       i = 0; 
    }

    document.getElementById('family_images').src=images[i];
    document.getElementById("family_names").textContent=names[i];
  i++;
};