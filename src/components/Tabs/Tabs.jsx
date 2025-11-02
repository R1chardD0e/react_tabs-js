export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={activeTabId === tab.id ? 'is-active' : ' '}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              if (tab.id !== activeTabId) onTabSelected(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
