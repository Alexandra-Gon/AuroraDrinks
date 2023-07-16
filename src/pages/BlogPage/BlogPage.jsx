import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blogsContainer">
      <div>
        <h3 className="blogTittle1">Cocktail Origins</h3>
        <div className="blogContainer1">
          <img
            className="blogImg"
            src={require("../../Img/imgBlog1.jpg")}
            alt="cocktails"
          />
          <p className="blogText">
            The history of the cocktail has its beginnings in the 18th century.
            At that time, it was a drink that consisted of mixing spirits
            (usually vodka) with other ingredients. The mixture of different
            types of alcohol gave it a unique and exclusive flavor that no other
            alcoholic beverage had. So with time it spread until today. Nowadays
            cocktail recipes can have many alcoholic beverages, they can be
            based on gin, vodka, rum, whiskey, cava, wine... Nowadays there is a
            great variety of cocktails and variations of these, you are ready to
            know them.<br/><br/>
            In dictum dui sit amet nibh porttitor, in blandit tortor sagittis.
            Morbi faucibus, ipsum vel rutrum pellentesque, lacus felis sagittis
            elit, a posuere lorem est nec nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Mauris nisi magna, lobortis sed lorem sit amet, congue
            tincidunt nisi. Nam porttitor mi quis auctor mollis. Nullam et    
            pretium felis, nec condimentum lorem. Cras vitae facilisis neque.
            Nunc consectetur eros nisl, at tempus ipsum semper nec. Ut vitae
            rhoncus mi.
          </p>
        </div>
      </div>
      <div>
        <h3 className="blogTittle2">
          "Cocktail" where does the word come from?
        </h3>
        <div className="blogContainer2">
          <p className="blogText">
            The origin of the word Cocktail is somewhat controversial. There are
            many theories of where the name came from but it is not entirely
            clear. In English "Cock" is cock and "Tail" is tail. One of the
            theories says that a waitress in a tavern in New York, stirred
            cocktails with a cock tail feather, and that is where the name
            cocktail comes from. On the other hand, it is said that it was an
            invention of a Frenchman, who sarcastically used a word in French
            and another in English, since Coq is also French for rooster.
            Another theory says that doctors used to cure sore throats by
            applying alcohol to the throat of their patients with a rooster
            feather dipped in alcohol. And some other theories are also floating
            around, in short, it is not entirely clear where the word cocktail
            comes from.<br/><br/>
            In dictum dui sit amet nibh porttitor, in blandit tortor sagittis.
            Morbi faucibus, ipsum vel rutrum pellentesque, lacus felis sagittis
            elit, a posuere lorem est nec nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Mauris nisi magna, lobortis sed lorem sit amet, congue
            tincidunt nisi. Nam porttitor mi quis auctor mollis. Nullam et
            pretium felis, nec condimentum lorem. Cras vitae facilisis neque.
            Nunc consectetur eros nisl, at tempus ipsum semper nec. Ut vitae
            rhoncus
          </p>
          <img
            className="blogImg"
            src={require("../../Img/imgBlog2.jpg")}
            alt="old cocktail photo"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BlogPage;
