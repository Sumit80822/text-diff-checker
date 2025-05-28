function compareTexts(text1, text2) {
  // Split texts into arrays of lines
  const lines1 = text1.split('\n');
  const lines2 = text2.split('\n');

  let htmlOutput = '';

  // Handle empty inputs
  if (text1 === '' && text2 === '') {
    return '<div class="diff-common">Both texts are empty.</div>';
  }

  if (text1 === '') {
    lines2.forEach(line => {
      htmlOutput += `<div class="diff-added">${line}</div>`;
    });
    return htmlOutput;
  }

  if (text2 === '') {
    lines1.forEach(line => {
      htmlOutput += `<div class="diff-removed">${line}</div>`;
    });
    return htmlOutput;
  }

  // Perform line-by-line comparison
  let i = 0;
  let j = 0;

  while (i < lines1.length || j < lines2.length) {
    if (i < lines1.length && j < lines2.length) {
      if (lines1[i] === lines2[j]) {
        htmlOutput += `<div class="diff-common">${lines1[i]}</div>`;
        i++;
        j++;
      } else {
        // Check if line from text1 is unique
        let k = j;
        let foundInText2 = false;
        while(k < lines2.length) {
          if (lines1[i] === lines2[k]) {
            foundInText2 = true;
            break;
          }
          k++;
        }

        if (!foundInText2) {
          htmlOutput += `<div class="diff-removed">${lines1[i]}</div>`;
          i++;
        } else {
          // Check if line from text2 is unique
          let l = i;
          let foundInText1 = false;
          while(l < lines1.length) {
            if (lines2[j] === lines1[l]) {
              foundInText1 = true;
              break;
            }
            l++;
          }
          if (!foundInText1) {
            htmlOutput += `<div class="diff-added">${lines2[j]}</div>`;
            j++;
          } else {
            // This case should ideally be handled by a more sophisticated diff algorithm
            // For now, let's assume lines are out of order and mark both as changed
            htmlOutput += `<div class="diff-removed">${lines1[i]}</div>`;
            htmlOutput += `<div class="diff-added">${lines2[j]}</div>`;
            i++;
            j++;
          }
        }
      }
    } else if (i < lines1.length) {
      htmlOutput += `<div class="diff-removed">${lines1[i]}</div>`;
      i++;
    } else if (j < lines2.length) {
      htmlOutput += `<div class="diff-added">${lines2[j]}</div>`;
      j++;
    }
  }

  return htmlOutput;
}

document.addEventListener('DOMContentLoaded', () => {
  const originalTextElement = document.getElementById('originalText');
  const modifiedTextElement = document.getElementById('modifiedText');
  const compareButtonElement = document.getElementById('compareButton');
  const diffOutputElement = document.getElementById('diffOutput');

  if (compareButtonElement) {
    compareButtonElement.addEventListener('click', () => {
      if (originalTextElement && modifiedTextElement && diffOutputElement) {
        const text1 = originalTextElement.value;
        const text2 = modifiedTextElement.value;
        const diffResultHtml = compareTexts(text1, text2);
        diffOutputElement.innerHTML = diffResultHtml;
      } else {
        console.error('Required elements not found. Check IDs: originalText, modifiedText, diffOutput');
      }
    });
  } else {
    console.error('Compare button not found');
  }
});
