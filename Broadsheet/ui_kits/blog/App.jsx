// App.jsx — wires screens together
const { useState } = React;

const POSTS = [
  {
    id: "balloon",
    chapter: "CHAPTER THE FIRST",
    title: "On Balloon Animals",
    dek: "in which the author considers a question of moment",
    date: "2026-02-15",
    read: "6 MIN READ",
    gradient: "linear-gradient(135deg, #c8b89a 0%, #a89878 60%, #d8cfb8 100%)",
  },
  {
    id: "ragged",
    chapter: "CHAPTER THE SECOND",
    title: "Like a Ragged Prayer",
    dek: "in which the author considers what the romance novelists know that we do not",
    date: "2026-03-02",
    read: "11 MIN READ",
    gradient: "linear-gradient(160deg, #b8a888 0%, #d4c8a8 100%)",
  },
  {
    id: "weather",
    chapter: "CHAPTER THE THIRD",
    title: "A Curious Weather",
    dek: "in which a city is described from the wrong end of a telescope",
    date: "2026-03-21",
    read: "4 MIN READ",
    gradient: "linear-gradient(120deg, #cfc4a8 0%, #b0a080 100%)",
  },
];

function IndexScreen({ go }) {
  return (
    <>
      <Masthead chapter="THE INDEX" date="2026 · ISSUE I" read="GLASGOW EDITION" />
      <Nav current="index" go={go} />
      <h1 className="v6-title" style={{ fontSize: 64, marginTop: 18 }}>The Index</h1>
      <p className="v6-dek">— a register of all chapters now in circulation —</p>
      <div className="v6-byline" style={{ marginBottom: 36 }}>
        <div className="v6-byline__rule"></div>
        <div className="v6-byline__text">EDITED · BOUND · PRINTED BY THE AUTHOR</div>
        <div className="v6-byline__rule"></div>
      </div>

      <div className="v6-broadsheet" style={{ columnFill: "balance" }}>
        {POSTS.map((p) => (
          <IndexCard key={p.id} {...p} onOpen={() => go("post", p.id)} />
        ))}
        <article style={{ breakInside: "avoid", marginBottom: 24 }}>
          <h3 style={{
            fontFamily: "var(--v6-font-display-sc)", fontSize: 11, letterSpacing: 5,
            color: "var(--v6-accent)", textAlign: "center", margin: "0 0 8px",
          }}>FROM THE FRONTISPIECE</h3>
          <p style={{
            fontFamily: "var(--v6-font-body)", fontSize: 16, lineHeight: 1.55,
            textAlign: "justify", hyphens: "auto", margin: 0,
          }}>
            This is a journal kept against forgetting. The chapters published here
            were written between February and the present, in the small hours, and
            in a hand that was not always patient with itself. The reader who has
            arrived by accident is welcome; the reader who has arrived on purpose
            is, of course, more welcome still.
          </p>
        </article>
      </div>
    </>
  );
}

function PostScreen({ go, postId }) {
  const post = POSTS.find((p) => p.id === postId) || POSTS[0];
  return (
    <>
      <Masthead chapter={post.chapter} date={post.date} read={post.read} />
      <Nav current="post" go={go} />
      <Title title={post.title} dek={post.dek} by="DAVID GÉROUVILLE-FARRELL" date={post.date} />
      <Plate hero caption="Plate the First. Drawn from the life." gradient={post.gradient} />
      <Motto>{post.title.toUpperCase()}</Motto>

      <Body>
        <p>Romance has always been a high-output genre — prolific writers publish multiple books a year. But one writer profiled in the piece, Coral Hart, has gone from about ten books a year to over two hundred, using AI across <a href="#">twenty-one different pen names</a>. The arithmetic is staggering and the prose, by all accounts, is no worse than it was.</p>
        <p>One of the writers describes herself as less of a writer now and "more of a director, a creator." She comes up with the plots and the characters, but she does not think of herself as the author anymore. The distinction is so old it ought to feel new.</p>

        <H2>Not the reaction you'd expect</H2>
        <p>The reaction in literary circles, naturally, has been one of low fury. The reaction in the romance reading communities has been entirely different — a mild, practical interest in whether the books continue to deliver what they promised, which is a particular shape of feeling at a reliable pace.</p>

        <Quote>It is a system rule, not a recommendation. Posts are always single-column.</Quote>

        <H3>A subordinate matter</H3>
        <p>Below, a sample of the language one might use to convene such a project. The Python is included here as a courtesy to the reader who wishes to inspect the machinery, and as a reminder that all machinery, given enough time, becomes a piece of folk art.</p>

        <CodeFrame language="PYTHON">{
`options = ClaudeAgentOptions(
    allowed_tools=["Read", "Write", "Edit"],
    can_use_tool=handle_tool_permission,
)`
        }</CodeFrame>

        <p>What remains, when the work is done and the page set, is the small matter of the reader — who, if she has come this far, deserves a closing ornament rather than a conclusion.</p>
      </Body>

      <EndMark chapter={post.chapter} />
    </>
  );
}

function AboutScreen({ go }) {
  return (
    <>
      <Masthead chapter="FRONTISPIECE" date="ABOUT THE AUTHOR" read="A DEDICATION" />
      <Nav current="about" go={go} />
      <h1 className="v6-title" style={{ fontSize: 72 }}>D. Gérouville-Farrell</h1>
      <p className="v6-dek" style={{ fontSize: 22 }}>
        — kept this journal because he could not be persuaded that anything else would do —
      </p>

      <div style={{ maxWidth: 540, margin: "32px auto 28px" }}>
        <Plate
          caption="The author, drawn from the life. Engraved by another hand."
          gradient="radial-gradient(circle at 40% 35%, #c8b89a 0%, #8a7a5a 60%, #2a2218 100%)"
        />
      </div>

      <div style={{
        fontFamily: "var(--v6-font-body)", fontStyle: "italic",
        fontSize: 21, lineHeight: 1.55, textAlign: "center",
        maxWidth: 560, margin: "0 auto 36px",
      }}>
        This blog is a journal kept against forgetting. The chapters are written in
        the small hours, in a hand not always patient with itself, and set here in
        the form of a Glaswegian broadsheet of the imagination. The reader is
        welcome. The reader is encouraged to write back.
      </div>

      <div style={{
        textAlign: "center",
        fontFamily: "var(--v6-font-display-sc)",
        fontSize: 11, letterSpacing: 5, color: "var(--v6-ink-mute)",
      }}>
        ❦ &nbsp; CORRESPONDENCE: MASTODON · BLUESKY · RSS &nbsp; ❦
      </div>
    </>
  );
}

function App() {
  const [screen, setScreen] = useState("index");
  const [postId, setPostId] = useState("balloon");

  const go = (s, id) => {
    setScreen(s);
    if (id) setPostId(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <Frame>
      {screen === "index" && <IndexScreen go={go} />}
      {screen === "post" && <PostScreen go={go} postId={postId} />}
      {screen === "about" && <AboutScreen go={go} />}
    </Frame>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
