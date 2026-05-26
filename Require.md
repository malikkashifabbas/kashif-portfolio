## In data.ts file link of resume ** resumeUrl: "d:\WEB JOURNEY COURSE\CV & Resume\Kashif_resume (1).pdf",**
**Every Imp information in Require.md file**

**IMP NOTE:**
How to add more project screenshots later
Same 2-line pattern as logos. For example, if you take a screenshot of the Nutrafi Kitchen homepage and save it as app/images/nutrafi-kitchen.png:
tsx// Add import at top:
import nutrafiImg from "../app/images/nutrafi-kitchen.png";

// Add to IMAGE_MAP:
const IMAGE_MAP: Record<string, StaticImageData> = {
  "Serenabeds Admin Dashboard": serenabedsAdminImg,
  "Nutrafi Kitchen": nutrafiImg,  // ← add this line
};
The title key must match the project's title field in lib/data.ts exactly (including capitalization).