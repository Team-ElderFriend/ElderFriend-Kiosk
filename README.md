# **ElderFriend** - Introduction to Human-Computer Interaction (CS374)
by Akkanit, Emil, Eunsu, Jaewoo


## **Index**
1. [Description](#description)
5. [Appendix](#Appendix)

## **Description**
### The project is still in prototyping stage!
This project is about adding facilitating features to the existing restaurant kiosk interface. Due to elders' difficulty during using or beginning to use Kiosk. Adding features have 3 purposes 
1. Increasing visibility of menus and button 
2. Increasing learnability for entire process
3. Increasing learnability in new menus

The structure of our source code is based on React components and router. The beginning layer of the site render can be found in App.js which will route you to PaymentView.js, SuccessView.js. Each of the javascript file will include components inside their class and render them in render method. All of the components source code files are in the /src folder. Our site use SCSS files to style itself, the files can be found in ./src/{component_name} folder together with the components they styling(.js) and they have thier name correspond to the component they are styling.  
**Demo** : https://team-elderfriend.github.io/ElderFriend-Kiosk/

## **Appendix**

### Libraries and Framework
you can also find the list in `package.json` file
- [react](https://reactjs.org)
- [react-bootstrap](https://react-bootstrap.netlify.com)
- [fontawesome](https://fontawesome.com)
- [react-redux](https://react-redux.js.org)
- [react-router](https://reacttraining.com/react-router/core/guides/philosophy)
- [material-ui](https://material-ui.com)
