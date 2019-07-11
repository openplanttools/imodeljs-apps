# **Plant Viewer (in development)**

Stages in a task:

1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**

## **Current Tasks**

1. Fix configuration reading, and comply with config.json (don't default to anything, use warnings). *mostly done* - Nick
2. Fix CSS formatting. *mostly done* - Nick
3. Rework titles. *mostly done* - Nick
4. Resolve all warnings/errors. *mostly done* - Zach
5. Pick which project to view. *mostly done* - Zach
6. Move dropdown boxes for project, iModel, and drawing selections to the header. *mostly done* (waiting for all buttons to be fully functional) - Nick/Zach
7. Make a Visio user guide. *mostly done* - Zach
8. Fix weird character bug (e.g. miscellaneous). *in progress* - Nick
9. Resolve list of projects in production. *in progress* - Zach
10. Pick which drawing to view. *in progress* - Zach
11. Fix the broken log-in in QA (right now, no log-in is required, but lacking access to currently fix this).
12. Move configuration.ts set-up into the electron viewer instead.
13. Fix initial button page.
14. Put button selection sin the menu.
15. Fix the briefcase id error in production.
16. Modify dependencies list, strip unused pieces, and keep only browser specific portions.
17. Add configurable options to options bar, and have those be saved in a JSON.
18. In the bottom properties display widget, add functionality to click on a category to display only that category, and click on it again to switch back to all categories.
19. Display both the 3D and 2D views in the viewport.
20. Only display and allow to pass in the projcet, iModel, and drawing names.
21. Maybe move the menu button to the window menu or in the toolbar in the viewport.
22. Look into token restoration after certain periods of time (i.e. does token expire after an hour even if using it?).
23. Implement loading circle function upon switching views/iModels/projects (possibly does not need to be done...).
24. Implement nicer loading functionality (possibly does no tneed to be done...).
25. Fix the sign-in button (lacking access to currently fix this).
26. Manually view all projects **Done** - Nick
27. Display only relevant documents in tree, and create new component to replace tree view for plant document models. **Done** - Nick
28. Automatically update on changes. **Done** - Nick
29. Be able to change the views in the viewer. **Done** - Nick
30. Be able to edit properties in the viewer. **Done** - Nick
31. Add scrolling to property. **Done** - Nick
32. Clean up code base. **Done** - Nick
33. Comment parts for explanations. **Done** - Nick
34. Convert backend to be entirely electron/desktop based. **Done** - Nick
35. Fix clashes with electron IPC and configuration of front-back communication. **Done** - Nick
36. Determine the necessity of webpack in browser runtime environment. **Done** - Nick
37. If we end up keeping webpack, reconfigure its options to be better suited (right now, it's causing some problems on the backend). **Done** - Nick
38. Determine whether/how to implement ipcMain-ipcRenderer communication. **Done** - Nick
39. Get viewport to successfully update. **Done** - Nick
40. Determine whether or not to migrate configuration.ts to a JSON. **Done** - Nick
41. Add unified selection capability back into the tree. **Done** - Nick
42. Fix scrolling issue with properties tool. **Done** - Nick
