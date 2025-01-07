var heading = document.getElementById("head");
var p1 = document.getElementById("1st");
var p2 = document.getElementById("2nd");
var p3 = document.getElementById("3rd");

var quizContainer = document.getElementById("quiz-form");
var scoreDisplay = document.getElementById("score");
var currentQuestions = [];

function AFTD() {
    heading.innerHTML = "תפוחים מן המדבר";
    p1.innerHTML = "הסיפור המרתק מתאר מסע פנימי וחיצוני של אם חרדית מאזור ירושלים, אשר יוצאת לדרך בכדי לפגוש את בתה, נערה צעירה החיה בקיבוץ חילוני בשם \"נווה מדבר\", השוכן בנגב. המטרה העיקרית של המסע היא לנסות להחזיר את הבת הביתה, אל עולם החרדי המוכר והאהוב, שבו הערכים הדתיים והמסורתיים הם הבסיס לכל. בעודה בדרכה, האם מתמודדת עם תהליך של התוודעות פנימית, בו היא מתחילה להבין את יחסיה עם הסובבים אותה, כמו גם עם האנשים הקרובים לה. תהליך זה מלווה בחשיבה מעמיקה על מהות הקשרים המשפחתיים ועל המקום של ערכים דתיים בחייה של בתה, שמתחילה לסטות מהדרך שהאם ראתה כדרך הנכונה.";
    p2.innerHTML = "פתיחה - הסיפור נפתח ברגע של התרגשות כאשר ויקטוריה אברבאנל נמצאת באוטובוס, בדרכה משכונת \"שערי חסד\" בירושלים אל הקיבוץ \"נווה מדבר\" שבנגב. היא יודעת שהנסיעה הזו היא לא רק פיזית, אלא גם רגשית ומנטלית. מלכתחילה ברור שמטרת הנסיעה היא להחזיר הביתה את בתה, ש\"סטתה\" מדרך הישר, עזבה את החיים החרדיים והלכה לקיבוץ של חילונים, שם היא חיה עם בחור ללא חופה וקידושין. בתחילת הנסיעה, מחשבותיה של האם מתרוצצות בראש, והיא מהרהרת כיצד תוכל לשוב עם בתה הביתה. היא שוקלת אופציות שונות: האם לשוחח עם הבת בשיקול-דעת ולהסביר לה את כבוד המשפחה, או אולי \"להאיר עיניה בדבר כבוד עלמה בעיני איש\"? גם האפשרות לדבר על \"ענייני צניעות\" עולה במוחה, אך היא לא פוסלת את האפשרות לפרוץ בצעקות ולהוכיח את בתה על החרפה שהיא מביאה על משפחתם. בתוך כל הדילמות הללו, האם מתלבטת גם אם לנסות להחזיר את בתה בעורמה או אפילו בכוח הזרוע. כל האופציות שהיא שוקלת הן מתוך העולם הדתי המוכר לה היטב, עולם שבו יש מקום לערכים כמו כבוד המשפחה, צניעות האישה וצייתנות. זהו עולם מסורתי ברור, חד-ערכי ונוקשה, ולעיתים קשה לה להבין את המשמעות של חירות הבחירה והאוטונומיה של הנערה.";
    p3.innerHTML = "במהלך נסיעתה, ויקטוריה נזכרת ברגעים משמעותיים מהעבר, כאשר היא חושבת על הדרך שבה החל הרומן של בתה רבקה עם דובי. דובי היה קצין בצבא, שהוזמן לקיבוץ כדי לדבר בפני בנות על שירות בנות דתיות בצבא. הקשר ביניהם החל בתור ידידות תמימה, אך עם הזמן הפך למשהו הרבה יותר עמוק. הם שמרו על קשר רציף, עד לרגע שבו רבקה, בת שמונה-עשרה, קמה ונסעה אליו אל המדבר, לאור ההזדמנות שהוצגה בפניה. האם מתחילה להבין שהרומן הזה שונה מהקשרים שהיא עצמה חוותה בעברה, ושאולי יש כאן משהו חדש שהיא לא מצליחה להבין במלואו. מחשבות אלו ממלאות את ראשה, והיא תוהה אם תצליח לשוב עם בתה הביתה, או שמא היא תיאלץ להתרגל למציאות שונה, מציאות שבה בתה אינה חלק מהעולם החרדי שהיא מכירה ואוהבת.";
    currentQuestions = [
        {
            question: "<b>מה מטרת המסע של ויקטוריה?<b>",
            options: ["להחזיר את בתה לקיבוץ", "להחזיר את בתה לבית החרדי", "לבקר את בתה בעבודתה"],
            answer: 1
        },
        {
            question: "<b>היכן מתרחשת העלילה?<b>",
            options: ["קיבוץ נווה מדבר", "ירושלים", "תל אביב"],
            answer: 0
        }
    ];
    displayQuiz();
}

function yona() {
    heading.innerHTML = "יונה";
    p1.innerHTML = "ספר יונה הוא ספר מקראי הממוקם בתנ\"\ך, חלק מהנביאים הקטנים, ואחת מהיצירות המיוחדות והמרתקות של הספרות המקראית. הוא מתאר את סיפורו של יונה הנביא, דמות מורכבת ונוגעת ללב, שנשלח על ידי ה' לנבא את חורבנה של נינווה, עיר גדולה ורעה, אשר שגתה בדרכיה ובמעשיה הרעים. אולם, במקום למלא את משימתו הנבואית, יונה בורח מהמשימה, מתמודד עם פחדיו וחששותיו, וחווה מסע של בריחה שמתפתח לכדי חוויה רוחנית מעמיקה. יונה עובר דרך מסעות שונים, פיזיים ונפשיים, שמביאות אותו להרהור על משמעות חובותיו כנביא ועל הקונפליקטים הפנימיים שהוא חווה. התנהגותו של יונה, שמתחילה כבורח, מתפתחת לכדי מסע של חיפוש עצמי, שבו הוא עוסק בשאלות קיומיות ובתכלית חייו.";
    p2.innerHTML = "יונה מתמודד עם סוגיות עמוקות של חובת הנבואה, תודעת החטא והרחמים, ושאלות על צדק אלוהי. הוא עובר מסע פנימי עמוק, שמאתגר אותו לא רק במובנים חיצוניים אלא גם במובנים נפשיים ורוחניים. לאחר בריחתו מהמשימה, הוא נקלע לסופה בים, חוויה קשה ומרתקת שמביאה אותו למפגש עם כוחות הטבע. במהלך הסופה, הוא נבלע על ידי דג גדול, חוויה שנראית כמו עונש אבל גם כהזדמנות לגילוי עצמי. בתוך הדג, הוא מתבונן פנימה, מתמודד עם תחושות של חרטה ואובדן, ובסופו של דבר מתעורר לתובנות חדשות על חרטה וסליחה. המסע שלו, שמתחיל כבריחה, הופך למסע של חיפוש אחר משמעות, שבו הוא לומד על עצמו, על אלוהיו ועל הקשר שלו לאנושות כולה.";
    p3.innerHTML = "בספר יונה יש מסר חזק על אהבת ה\'\ לכל הברואים, המסביר כי גם אויבים יכולים לשוב בתשובה ולהשתנות. הסיפור מציע לקוראים לחשוב על גבולות החמלה והסליחה ועל תפקידם של הנביאים והאמונה. יונה, שמייצג את המאבק האנושי והרגשות המורכבים של פחד, כעס ותסכול, מהווה דוגמה לכל אדם שמרגיש לפעמים שהוא לא מסוגל או לא רוצה לעמוד מול האתגרים שהחיים מציבים בפניו. המסר של הספר הוא לא רק על חובת הנבואה אלא גם על האפשרות לתיקון, על ההבנה שהרחמים והחמלה הם ערכים חשובים, גם כאשר מדובר באנשים שהיו לנו אויבים או שמתנהגים בצורה לא ראויה. יונה, בסופו של דבר, לומד שהאהבה והסליחה הן הכוחות שמעוררים שינוי אמיתי, ושכל אדם יכול למצוא את דרכו חזרה אל הדרך הנכונה, גם אם הוא טועה ומחטיא את המטרה.";
    currentQuestions = [
        {
            question: "<b>מהו העונש שברח ממנו יונה?<b>",
            options: ["הגלות", "הסופה בים", "הישארות בנינווה"],
            answer: 1
        },
        {
            question: "<b>היכן נמצא יונה לאחר שנבלע על ידי הדג?<b>",
            options: ["בתוך הדג", "בגלות", "בסופה"],
            answer: 0
        }
    ];
    displayQuiz();
}

function kings() {
    heading.innerHTML = "מלכים ב פרק יז";
    p1.innerHTML = "פרק י\"ז בספר מלכים ב' עוסק בחורבן ממלכת ישראל הצפונית וגלות תושביה לאשור. הסיפור מתחיל בתיאור מלכותו של הושע בן אלה, המלך האחרון של ישראל, שמתארת את התקופה הסוערת של סוף הממלכה. הושע נכנע לאשור ושילם מס, אך ניסה למרוד בסופו של דבר על ידי פנייה למצרים, מעשה שהוביל לכיבוש הארץ על ידי סרגון מלך אשור. הכיבוש הביא לחורבן שומרון ולהגליית תושביה לאשור, והותיר את הארץ שוממה.";
    p2.innerHTML = "בפרק מופיעים תיאורים מפורטים של החטאים שהובילו לחורבן הממלכה. העם עבד אלילים, בנה במות, והלך בדרכי הגויים שסבבו אותם. הם זנחו את חוקי ה' ואת הברית שהוקמה עם אבותיהם. בנוסף, הפרק מזכיר את הקרבת הילדים באש ואת עבודת האלילים במקומות שונים. ההתנהגות הזו עוררה את זעמו של ה', ששלח נביאים להזהיר את העם. אך אזהרות אלו לא נשמעו, והעם המשיך ללכת בדרכיו הרעות.";
    p3.innerHTML = "הפרק מדגיש את המסר המרכזי של שמירה על הברית עם ה' וההשלכות של הפרתה. הגלות לאשור נתפסת כעונש על אי-ציות לחוקי התורה ועל הזנחת הדרך הנכונה. המסר המרכזי הוא על חשיבות האמונה, הציות לה' והימנעות מחטאים. בנוסף, הפרק מעלה שאלות על מנהיגות, אחריות קולקטיבית, והשפעתם של מעשים אישיים וקולקטיביים על גורל העם. החורבן מהווה תזכורת צורמת למחויבות העם לברית ולהשלכות של הפרתה.";
    currentQuestions = [
        {
            question: "<b>מה הייתה הסיבה לחורבן ממלכת ישראל?<b>",
            options: ["המרד במלך אשור", "החטאים של העם", "הכיבוש המצרי"],
            answer: 1
        },
        {
            question: "<b>מהו המסר המרכזי בפרק?<b>",
            options: ["שימור הברית עם ה'", "המרד בנביאים", "ההישגיות של המלכים"],
            answer: 0
        }
    ];
    displayQuiz();
}

function OOS() {
    heading.innerHTML = "אחת מאיתנו";
    p1.innerHTML = "הסיפור מתאר קבוצת בנות מתבגרות בגיל חטיבת הביניים המתעללות באחת מבנות כיתתן, נערה שלמרות היותה חדשה בחברת הכיתה נוהגת בביטחון יחסי. במטרה ל\"חנך\" אותה הן לועגות לה, מסרבות לקבל אותה כחלק מן \"החבורה\" ולבסוף אף מכות אותה, בעידודה הנמרץ של מנהיגת הקבוצה. הסיפור מסופר בגוף ראשון על ידי אחת מתוך חבורת הבנות.";
    p2.innerHTML = "דרך עיניה של המספרת רואים באופן חד וישיר את האכזריות החברתית סביב השאלה מי 'נחשב' ומי לא, את הצייתנות הקבוצתית לקודים החברתיים ואת המדדים החיצוניים שמכריעים את דירוג ה'נחשב'. הסיפור עוסק ברגשות של תוקפנות וכעס הבאים לידי ביטוי באלימות פיזית ומילולית קשה של הקבוצה כלפי הפרט.";
    p3.innerHTML = "המספרת מתארת כיצד החברה שמה את הדגש על המראה החיצוני ועל מדדים חיצוניים. היא נמצאת בקונפליקט בין עולם הערכים שלה לבין הדרישות של המנהיגה והקבוצה, אך בוחרת לבסוף לשמור על שייכותה לקבוצה ולא לעמוד לצד 'השעירה'. הסיפור מעלה שאלות על ערכים חברתיים, חמלה ואומץ לב מול צייתנות עיוורת.";
    currentQuestions = [
        {
            question: "<b>מה עושות הבנות לנערה החדשה?<b>",
            options: ["מחבקות אותה", "לעגו לה והכות אותה", "מקבלות אותה בשמחה"],
            answer: 1
        },
        {
            question: "<b>מה מסביר הסיפור על החברה?<b>",
            options: ["הסיפור עוסק בעדכונים חברתיים", "הסיפור מציע שיוויון בין כולם", "הסיפור עוסק באכזריות קבוצתית"],
            answer: 2
        }
    ];
    displayQuiz();
}

function displayQuiz() {
    quizContainer.innerHTML = "";
    currentQuestions.forEach((question, index) => {
        var questionHTML = `
            <label>${question.question}</label>
            <input type="radio" name="q${index}" value="0"> ${question.options[0]}<br>
            <input type="radio" name="q${index}" value="1"> ${question.options[1]}<br>
            <input type="radio" name="q${index}" value="2"> ${question.options[2]}<br>
        `;
        quizContainer.innerHTML += questionHTML;
    });
}

function checkAnswers() {
    var score = 0;
    currentQuestions.forEach((question, index) => {
        var selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score++;
        }
    });
    scoreDisplay.innerText = `ניקוד: ${score} מתוך ${currentQuestions.length}`;
}
