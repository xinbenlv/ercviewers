// License: CC0
export const ERC721ABI = [
    /* --- ERC721 Core --- */
    'event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)',
    'event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)',
    'event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)',
    'function balanceOf(address owner) external view returns (uint256 balance)',
    'function ownerOf(uint256 tokenId) external view returns (address owner)',
    'function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external',
    'function safeTransferFrom(address from, address to, uint256 tokenId) external',
    'function transferFrom(address from, address to, uint256 tokenId) external',

    /* --- ERC721 Metadata --- */
    'function name() external view returns (string memory)',
    'function symbol() external view returns (string memory)',
    'function tokenURI(uint256 tokenId) external view returns (string memory)',

    /* --- ERC 721 Enumerable -- -*/
    'function totalSupply() external view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId)',
    'function tokenByIndex(uint256 index) external view returns (uint256)',
    'function approve(address to, uint256 tokenId) external',
    'function setApprovalForAll(address operator, bool _approved) external',
    'function getApproved(uint256 tokenId) external view returns (address operator)',
    'function isApprovedForAll(address owner, address operator) external view returns (bool)',
];
