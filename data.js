window.TRAINING_GROUPS={
 Push:[
 {label:'Brustdrücken',options:['Bankdrücken','Liegestütze','Liegestütze mit Gewichtsweste','Liegestütze mit Band','Band Chest Press']},
 {label:'Beine · Kniebeuge',options:['Bulgarian Split Squats','Bulgarian Split Squats mit Gewichtsweste']},
 {label:'Brust · Isolation',options:['Butterfly Maschine','Band Chest Fly','TRX Chest Fly']},
 {label:'Schulterdrücken',options:['Schulterdrücken','HSPU','Pike Push-ups']},
 {label:'Dips · Trizeps/Brust',options:['Dips','Enge Liegestütze','Band Triceps Pressdown']},
 {label:'Trizeps · Isolation',options:['Skull Crushers','TRX Skull Crushers','Overhead Triceps']},
 {label:'Core',options:['Hollow Body Hold','Plank']}
 ],
 Pull:[
 {label:'Vertikales Ziehen',options:['Klimmzüge','Lat Pulldown','Band Lat Pulldown']},
 {label:'Horizontales Ziehen',options:['Kabelrudern','TRX Rudern','Bent Over Row','Einarmiges Kurzhantelrudern']},
 {label:'Beinrückseite / Hüftstreckung',options:['Romanian Deadlifts','Romanian Deadlift','TRX Hamstring Curls']},
 {label:'Seitliche Schulter',options:['Seitheben KH','Seitheben','Seitheben mit Band']},
 {label:'Bizeps',options:['Bizepscurls SZ','Bizepscurls KH','Bizepscurls','Bizepscurls mit Band']},
 {label:'Core',options:['L-Sit','Hanging Knee Raises']}
 ]
};
window.TRAINING_DEFAULTS={
 'Bankdrücken':[3,'6–10','2–3 min'],'Liegestütze':[3,'8–15','2–3 min'],'Liegestütze mit Gewichtsweste':[3,'8–15','2–3 min'],'Liegestütze mit Band':[3,'8–15','2–3 min'],'Band Chest Press':[3,'8–15','2–3 min'],
 'Bulgarian Split Squats':[3,'6–10','2–3 min'],'Bulgarian Split Squats mit Gewichtsweste':[3,'8–15','2–3 min'],
 'Butterfly Maschine':[3,'10–15','1,5–2 min'],'Band Chest Fly':[3,'10–15','1,5–2 min'],'TRX Chest Fly':[3,'10–15','1,5–2 min'],
 'Schulterdrücken':[3,'6–10','2–3 min'],'HSPU':[3,'6–12','2 min'],'Pike Push-ups':[3,'6–12','2 min'],
 'Dips':[3,'6–10','2–3 min'],'Enge Liegestütze':[3,'8–15','2 min'],'Band Triceps Pressdown':[3,'10–15','1,5–2 min'],
 'Skull Crushers':[2,'10–15','1,5–2 min'],'TRX Skull Crushers':[2,'10–15','1,5–2 min'],'Overhead Triceps':[2,'10–15','1,5–2 min'],
 'Hollow Body Hold':[3,'20–45 s','60–90 s'],'Plank':[3,'30–60 s','60–90 s'],
 'Klimmzüge':[3,'6–10','2–3 min'],'Lat Pulldown':[3,'8–15','2–3 min'],'Band Lat Pulldown':[3,'8–15','2–3 min'],
 'Kabelrudern':[3,'8–12','2–3 min'],'TRX Rudern':[3,'8–12','2–3 min'],'Bent Over Row':[3,'8–15','2 min'],'Einarmiges Kurzhantelrudern':[3,'8–12','2 min'],
 'Romanian Deadlifts':[3,'8–12','2–3 min'],'Romanian Deadlift':[3,'8–15','1,5–2 min'],'TRX Hamstring Curls':[3,'10–15','1,5–2 min'],
 'Seitheben KH':[3,'12–20','1–1,5 min'],'Seitheben':[3,'12–20','1–1,5 min'],'Seitheben mit Band':[3,'12–20','1–1,5 min'],
 'Bizepscurls SZ':[3,'8–15','1,5–2 min'],'Bizepscurls KH':[3,'8–15','1,5–2 min'],'Bizepscurls':[3,'8–15','1,5–2 min'],'Bizepscurls mit Band':[3,'8–15','1,5–2 min'],
 'L-Sit':[3,'10–30 s','1–2 min'],'Hanging Knee Raises':[3,'10–15','1–2 min']
};
// Keep the original SEED plans for compatibility with existing localStorage.
window.SEED={plans:{Push:TRAINING_GROUPS.Push.map(g=>{const n=g.options[0],a=TRAINING_DEFAULTS[n];return {name:n,sets:a[0],target:a[1],rest:a[2]}}),Pull:TRAINING_GROUPS.Pull.map(g=>{const n=g.options[0],a=TRAINING_DEFAULTS[n];return {name:n,sets:a[0],target:a[1],rest:a[2]}})},history:[],nutrition:[]};
